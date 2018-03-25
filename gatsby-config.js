module.exports = {
  siteMetadata: {
    title: 'Gatsby Test site for McD',
    description: 'This is the test site description'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      },
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `raleway\:400,700,900`,
          `source sans pro\:300,400` // you can also specify font weights and styles
        ]
      },
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-5GL7V2N",
        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
      },
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/favicon.png",
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    },
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-json`,
    `gatsby-plugin-styled-components`
  ]
};
