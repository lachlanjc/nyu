const path = require('path')

module.exports = {
  siteMetadata: {
    name: '@lachlanjc @ nyu',
    siteUrl: 'https://nyu.lachlanjc.com'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        components: path.join(__dirname, 'src/components'),
        sections: path.join(__dirname, 'src/sections'),
        pages: path.join(__dirname, 'src/pages'),
        theme: path.join(__dirname, 'src/theme'),
        data: path.join(__dirname, 'src/data.json')
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components'
  ]
}
