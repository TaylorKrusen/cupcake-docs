// doczrc.js
module.exports = {
    "src": "src/mdx",
    "source": "src/mdx",
    "plugins": ['gatsby-plugin-mdx'],
    "typescript": true,
    "menu": [
        { name: "Introduction", menu: []},
        { name: "User Endpoints", menu: []},
        { name: "Business Endpoints", menu: []}
    ],
    themeConfig: {
      colors: {
          modes: {
              dark: {
                  sidebar: {
                      navGroup: '#FFFFFF',
                      tocLink: '#F5F6F7',
                      tocLinkActive: '#FFFFFF',
                  }
              }
          }
      },
    },
}
