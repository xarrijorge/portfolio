const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Xarri Jorge`,
    description: `Randy Xarri George developer portfolio`,
    author: `@xarrijorge`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `RandyXarriGeorge`,
        short_name: `xarrijorge`,
        start_url: `/`,
        background_color: `#282a36`,
        theme_color: `#006767`,
        display: `minimal-ui`,
        icon: `src/images/xarriAvatar.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    "gatsby-plugin-offline",
  ],
}
