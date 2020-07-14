module.exports = {
  plugins: [
    `gatsby-transformer-yaml`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'stoneTypes',
        path: `${__dirname}/../src/stone-types/`,
      },
    },
  ]
}