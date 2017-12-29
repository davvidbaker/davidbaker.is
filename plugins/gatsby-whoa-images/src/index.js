const select = require(`unist-util-select`);
const path = require(`path`);
const isRelativeUrl = require(`is-relative-url`);
const _ = require(`lodash`);
const { sizes } = require(`gatsby-plugin-sharp`);
const Promise = require(`bluebird`);
const cheerio = require(`cheerio`);
const chalk = require(`chalk`);
const slash = require(`slash`);

// If the image is relative (not hosted elsewhere)
// 1. Find the image file
// 2. Find the image's size
// 3. Filter out any responsive image sizes that are greater than the image's width
// 4. Create the responsive images.
// 5. Set the html w/ aspect ratio helper.
module.exports = (
  { files, markdownNode, markdownAST, pathPrefix, getNode },
  pluginOptions
) => {
  const defaults = {
    maxWidth: 2048,
    wrapperStyle: ``,
    backgroundColor: `white`,
    pathPrefix,
    minWidth: 10,
  };

  const options = _.defaults(pluginOptions, defaults);

  // This will only work for markdown syntax image tags
  const markdownImageNodes = select(markdownAST, `image`);

  // This will also allow the use of html image tags
  const rawHtmlNodes = select(markdownAST, `html`);

  // Takes a node and generates the needed images and then returns
  // the needed HTML replacement for the image
  const generateImagesAndUpdateNode = async function(node, resolve) {
    try {
      // Check if this markdownNode has a File parent. This plugin
      // won't work if the image isn't hosted locally.
      const parentNode = getNode(markdownNode.parent);
      let imagePath;
      if (parentNode && parentNode.dir) {
        imagePath = slash(path.join(parentNode.dir, node.url));
      } else {
        return null;
      }

      const imageNode = _.find(files, file => {
        if (file && file.absolutePath) {
          return file.absolutePath === imagePath;
        }
        return null;
      });
      if (!imageNode || !imageNode.absolutePath) {
        return resolve();
      }

      let responsiveSizesResult = await sizes({
        file: imageNode,
        args: options,
      });

      try {
        let blurResult = await sizes({
          file: imageNode,
          args: { ...options, maxWidth: 512 }, // was failing at lower values of maxwidth, and I was struggling to catch the errors.
        });
        // return {
        //   blur: null,
        //   blur64: null,
        //   src: null,
        //   width: null,
        // };
        console.log('\nblurresult');

        let blurImg = blurResult.src;
        /** 💁 for some reason, blurImg was not always being saved to disk... */
        let blur64 = blurResult.base64;

        //       // Calculate the paddingBottom %
        //       const ratio = `${1 / responsiveSizesResult.aspectRatio * 100}%`;

        const originalImg = responsiveSizesResult.originalImg;
        //       const fallbackSrc = responsiveSizesResult.src;
        //       const srcSet = responsiveSizesResult.srcSet;
        const presentationWidth = responsiveSizesResult.presentationWidth;

        //       // Generate default alt tag
        //       const srcSplit = node.url.split(`/`);
        //       const fileName = srcSplit[srcSplit.length - 1];
        //       const fileNameNoExt = fileName.replace(/\.[^/.]+$/, ``);
        //       const defaultAlt = fileNameNoExt.replace(/[^A-Z0-9]/gi, ` `);

        //       // TODO
        //       // Fade in images on load.
        //       // https://www.perpetual-beta.org/weblog/silky-smooth-image-loading.html

        //       // Construct new image node w/ aspect ratio placeholder
        //       // console.log('blurImg 🚚', blurImg);
        //       // console.log('blur64 🚚', blur64);

        return {
          blur: blurImg,
          blur64,
          src: originalImg,
          width: presentationWidth,
        };
      } catch (e) {
        console.log('132 e', e);
        return resolve();
      }
    } catch (e) {
      console.log('log 128 e', e);
      return resolve();
    }
  };

  return Promise.all(
    // Simple because there is no nesting in markdown
    markdownImageNodes.map(
      node =>
        new Promise(async (resolve, reject) => {
          try {
            const fileType = node.url.slice(-3);

            // Ignore gifs as we can't process them,
            // svgs as they are already responsive by definition
            console.log('\nnode.url', node.url);
            if (
              isRelativeUrl(node.url) &&
              fileType !== `gif` &&
              fileType !== `svg`
            ) {
              try {
                const result = await generateImagesAndUpdateNode(node, resolve);
                let blur, src, width;
                if (result) {
                  blur = result.blur;
                  blur64 = result.blur64;
                  src = result.src;
                  width = result.width;

                  console.log('blur', blur);
                  console.log('src', src);
                  console.log('result width', width);

                  // I'm actually only using blur64 because blur file wasn't always written to disk for some reason.
                  node.blur = blur;
                  node.blur64 = blur64;
                  node.src = src;
                  node.width = width;
                } else {
                  console.log('else!');
                }
                // console.log('resolving');
                console.log('\n\n');
                return resolve(node);
              } catch (e) {
                console.log('e', e);
                resolve(e);
              }
            } else {
              // Image isn't relative so there's nothing for us to do.
              console.log('img is not relative');
              return resolve();
            }
          } catch (e) {
            console.log('errro 183', e);
          }
        })
    )
  )
    .then(markdownImageNodes =>
      // THIS IS ALL WRONG ⚠️️️️️️️️️️⚠️️️️️️️️️️⚠️️️️️️️️️️⚠️️️️️️️️️️⚠️️️️️️️️️️⚠️️️️️️️️️️⚠️️️️️️️️️
      // HTML image node stuff
      Promise.all(
        // Complex because HTML nodes can contain multiple images
        rawHtmlNodes.map(
          node =>
            new Promise(async (resolve, reject) => {
              console.log('in the section that is all wrong');
              if (!node.value) {
                return resolve();
              }

              const $ = cheerio.load(node.value);
              if ($(`img`).length === 0) {
                // No img tags
                return resolve();
              }

              let imageRefs = [];
              $(`img`).each(function() {
                imageRefs.push($(this));
              });

              for (let thisImg of imageRefs) {
                // Get the details we need.
                let formattedImgTag = {};
                formattedImgTag.url = thisImg.attr(`src`);
                formattedImgTag.title = thisImg.attr(`title`);
                formattedImgTag.alt = thisImg.attr(`alt`);

                if (!formattedImgTag.url) {
                  return resolve();
                }

                const fileType = formattedImgTag.url.slice(-3);

                // Ignore gifs as we can't process them,
                // svgs as they are already responsive by definition
                if (
                  isRelativeUrl(formattedImgTag.url) &&
                  fileType !== `gif` &&
                  fileType !== `svg`
                ) {
                  const { srcSet } = await generateImagesAndUpdateNode(
                    formattedImgTag,
                    resolve
                  );
                  // Replace the image string
                  // ⚠️ wrong wrong wrong
                  thisImg.replaceWith(rawHTML);
                } else {
                  return resolve();
                }
              }

              // Replace the image node with an inline HTML node.
              node.type = `html`;
              node.value = $(`body`).html(); // fix for cheerio v1

              return resolve(node);
            })
        )
      )
        .then(htmlImageNodes =>
          markdownImageNodes.concat(htmlImageNodes).filter(node => !!node)
        )
        .catch(e => {
          console.log('e at 237', e);
        })
    )
    .catch(e => {
      console.log('e at the end', e);
    });
};
