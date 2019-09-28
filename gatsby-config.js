const path = require('path')

module.exports = {
  siteMetadata: {
    name: 'Andrew Gao & SSP',
    siteUrl: 'https://ssp.andrewgao.tech'
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
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Andrew Gao & SSP',
        short_name: 'SSP',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#57068c',
        display: 'minimal-ui'
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-netlify',
    'gatsby-plugin-no-sourcemaps'
  ]
}
