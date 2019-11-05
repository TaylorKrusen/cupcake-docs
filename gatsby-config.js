// In your gatsby-config.js
module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              path: `${__dirname}/src`,
              name: `pages`,
            },
          },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
  ]
}