module.exports = {
  siteMetadata: {
    title: `Tom & Derry`,
    description: `Tom & Derry`,
    author: `Thomas Maximilian Lener <tom@tomderry.com>`,
    siteUrl: `https://tomderry.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
     resolve: `gatsby-plugin-google-fonts`,
     options: {
       fonts: [
         `Josefin Sans\:300,400,700`,
         `Lekton\:400,700`,
         `Proza Libre\:400,400i,700,700i`,
         `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
       ],
       display: 'swap'
     }
   }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
