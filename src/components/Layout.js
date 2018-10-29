import React from 'react'
import Helmet from 'react-helmet'
import data from 'data'
import ThemeProvider from 'theme'
import { theme } from 'theme'
import '../../static/graphik.css'
import '../../static/katwijk-mono.css'

const { name, title, description, img, url } = data

const meta = tags =>
  tags.map((props, index) =>
    React.createElement('meta', { ...props, key: index })
  )

export default ({ children }) => (
  <ThemeProvider>
    <Helmet title={title}>
      <html lang="en" />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <meta name="theme-color" content={theme.colors.nyu} />
      {meta([
        { name: 'description', content: description },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:description', content: description },
        { name: 'twitter:domain', content: url },
        { name: 'twitter:site', content: url },
        { name: 'twitter:image', content: img },
        { name: 'twitter:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: img },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:site_name', content: name },
        { property: 'og:title', content: title },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: url }
      ])}
    </Helmet>
    {children}
  </ThemeProvider>
)
