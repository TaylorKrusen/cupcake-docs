module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-175142908-1",
        head: true
      }
    },
    {
      resolve: "gatsby-plugin-prettier-eslint",
      options: {
        prettier: {
          patterns: [
            // the pattern "**/*.{js,jsx,ts,tsx}" is not used because we will rely on `eslint --fix`
            "**/*.{css,scss,less}",
            "**/*.{json,json5}",
            "**/*.{graphql}",
            "**/*.{md,mdx}",
            "**/*.{html}",
            "**/*.{yaml,yml}",
          ],
        },
        eslint: {
          patterns: "**/*.{js,jsx,ts,tsx}",
          customOptions: {
            fix: true,
            cache: true,
          },
        },
      },
    },
    `gatsby-transformer-yaml`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sass`,
  ],
  siteMetadata: {
    headerLinks: [
      {
        text: "Documentation",
        link: "https://www.dropbox.com/developers/documentation",
      },
      {
        text: "Guides",
        link: "https://www.dropbox.com/developers/reference",
      },
      {
        text: "Community & Support",
        link: "https://www.dropbox.com/developers/support",
      },
    ],
  }
}