const _ = require('lodash');
const Promise = require('bluebird');
const path = require('path');
const select = require(`unist-util-select`);
const fs = require(`fs-extra`);

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  const BlogPosts = new Promise((resolve, reject) => {
    const pages = [];
    const blogPost = path.resolve('./src/templates/blog-post.js');
    resolve(
      graphql(
        `
          {
            allWhoa(limit: 1000) {
              edges {
                node {
                  frontmatter {
                    path
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        // Create blog posts pages.
        _.each(result.data.allWhoa.edges, edge => {
          createPage({
            path: `scribbling-about-${edge.node.frontmatter.path}`,
            component: blogPost,
            context: {
              postPath: edge.node.frontmatter.path,
            },
          });
        });
      })
    );
  });

  const Projects = new Promise((resolve, reject) => {
    const pages = [];
    const projectTemplate = path.resolve('./src/templates/project.js');
    resolve(
      graphql(
        `
          {
            allProjectsJson(limit: 1000) {
              edges {
                node {
                  path
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        _.each(result.data.allProjectsJson.edges, edge => {
          console.log('edge.node.path', edge.node.path);
          createPage({
            path: `${edge.node.path}`,
            component: projectTemplate,
            context: {
              projectPath: edge.node.path,
            },
          });
        });
      })
    );
  });

  return Promise.all([BlogPosts, Projects]);
};

exports.modifyWebpackConfig = ({ config, stage }) => {
  if (stage === 'build-html') {
    config.loader('null', {
      test: /webfontloader/,
      loader: 'null-loader',
    });
  }
};
