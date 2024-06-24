const _ = import('lodash');
// const Promise = require('bluebird');
const path = require('path');
// const select = import(`unist-util-select`);
const fs = require(`fs-extra`);

// maybe change this layout to a post-specific layout
const postTemplate =  path.resolve(`./src/components/layout.jsx`)

const { createFilePath } = require(`gatsby-source-filesystem`)

const projectTemplate = path.resolve('./src/templates/project.js');


exports.onPostBuild = ({ reporter }) => {
  reporter.info(`🔥Your Gatsby site has been built!`)
}


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // Create project pages dynamically
  const resultProjects = await graphql(`
  query {
    allProjectsJson(limit: 1000) {
      edges {
        node {
          path
        }
      }
    }
  }
  `)
  resultProjects.data.allProjectsJson.edges.forEach(edge => {
    createPage({
      path: `${edge.node.path}`,
      component: projectTemplate,
      context: {
        projectPath: edge.node.path,
      },
    })
  })

  // create blog pages
  const result = await graphql(`
      query {
        allMdx {
          nodes {
            id
            frontmatter {
              slug
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    `)

  if (result.errors) {
    reporter.panicOnBuild('Error loading MDX result', result.errors)
  }

  // Create blog post pages.
  const posts = result.data.allMdx.nodes

  // you'll call `createPage` for each result
  posts.forEach(node => {
    createPage({
      // As mentioned above you could also query something else like frontmatter.title above and use a helper function
      // like slugify to create a slug
      path: `writing/${node.frontmatter.slug}`,
      // Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
      // your-layout-component.js?__contentFilePath=absolute-path-to-your-mdx-file.mdx
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })
}







// exports.create = ({ graphql, boundActionCreators }) => {
//   const { createPage } = boundActionCreators;

//   const BlogPosts = new Promise((resolve, reject) => {
//     const pages = [];
//     const blogPost = path.resolve('./src/templates/blog-post.js');
//     resolve(
//       graphql(
//         `
//         {
//           allWhoa(limit: 1000) {
//             edges {
//               node {
//                 frontmatter {
//                   path
//                 }
//               }
//             }
//           }
//         }
//       `
//       ).then(result => {
//         if (result.errors) {
//           console.log(result.errors);
//           reject(result.errors);
//         }

//         // Create blog posts pages.
//         _.each(result.data.allWhoa.edges, edge => {
//           createPage({
//             path: `${edge.node.frontmatter.path}`,
//             component: blogPost,
//             context: {
//               postPath: edge.node.frontmatter.path,
//             },
//           });
//         });
//       })
//     );
//   });

//   const Projects = new Promise((resolve, reject) => {
//     const pages = [];
//     const projectTemplate = path.resolve('./src/templates/project.js');
//     resolve(
//       graphql(
//         `
//         {
//           allProjectsJson(limit: 1000) {
//             edges {
//               node {
//                 path
//               }
//             }
//           }
//         }
//       `
//       ).then(result => {
//         if (result.errors) {
//           console.log(result.errors);
//           reject(result.errors);
//         }

//         _.each(result.data.allProjectsJson.edges, edge => {
//           createPage({
//             path: `${edge.node.path}`,
//             component: projectTemplate,
//             context: {
//               projectPath: edge.node.path,
//             },
//           });
//         });
//       })
//     );
//   });

//   return Promise.all([BlogPosts, Projects]);
// };
