const _ = import('lodash');
// const Promise = require('bluebird');
const path = require('path');
// const select = import(`unist-util-select`);
const fs = require(`fs-extra`);

const { createFilePath } = require(`gatsby-source-filesystem`)

const projectTemplate = path.resolve('./src/templates/project.js');


exports.onPostBuild = ({ reporter }) => {
  reporter.info(`🔥Your Gatsby site has been built!`)
}


// Create project pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
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


  result.data.allProjectsJson.edges.forEach(edge => {
    if (!edge.node.description) return;
    createPage({
      path: `${edge.node.path}`,
      component: projectTemplate,
      context: {
        projectPath: edge.node.path,
      },
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
