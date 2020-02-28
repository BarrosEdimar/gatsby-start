/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const siteMetadata = require('./config/metadata');

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,    
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Agência Hode`,
        short_name: `Hode`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#7159C1`,
        display: `standalone`,
        icon: `src/assets/icon.png` // 512 x 512
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#7159C1`
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-149539931-1",
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.hode.com.br`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== 'production'
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/styles.js`],
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
  ]
}
