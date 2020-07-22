// doczrc.js
module.exports = {
    "src": "src/mdx",
    "source": "src/mdx",
    "plugins": ['gatsby-plugin-mdx'],
    "typescript": true,
    "menu": [
        "User API introduction",
        "account",
        "auth",
        "check",
        "cloud_docs",
        "contacts",
        "file_properties",
        "file_requests",
        "files",
        "sharing",
        "users",
        "Business API introduction",
        "team",
        "team_log",
        "deprecated"
    ],
    "dest": "/docs",
    "base": "/cupcake-docs",
    "title": "DBX Cupcake Docs",
    "description": "Dropbox public API documentation with extra cupcake.",
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
