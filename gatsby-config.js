module.exports = {
  siteMetadata: {
    title: 'David Baker is Online',
    author: 'David Baker',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-transformer-whoa`,
      options: {
        plugins: [
          'gatsby-whoa-images',
          // {
          //   resolve: `gatsby-remark-images`,
          //   options: {
          //     maxWidth: 590,
          //   },
          // },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-json',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    // `gatsby-plugin-offline`, // I think this has been fucking shit up wit hth
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-react-next`,
    /** 💁 this is intentionally left out because both it and redux implement ssr 
     * https://github.com/gatsbyjs/gatsby/issues/2005
    */
    // 'gatsby-plugin-styled-components',
  ],
};
