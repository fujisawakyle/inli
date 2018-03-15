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
      }
    },
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-json`,
    `gatsby-plugin-styled-components`
  ]
};
