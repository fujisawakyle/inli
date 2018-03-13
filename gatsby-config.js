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
      }
    },
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-json`,
    `gatsby-plugin-styled-components`
  ]
};
