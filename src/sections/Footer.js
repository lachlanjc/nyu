import React from 'react'
import { Box, Heading, Link, Text } from '@hackclub/design-system'
import { theme } from 'theme'

const Footer = ({ children }) => (
  <Box.footer
    p={[4, 5]}
    bg={theme.colors.smoke}
    color={theme.colors.slate}
    align="center"
  >
    <Heading.h3 fontSize={4} align="center" mb={2}>
      Thanks for reading.
    </Heading.h3>
    <Text fontSize={1}>
      Site by{' '}
      <Link target="_blank" href="https://lachlanjc.me" hoverline>
        @lachlanjc
      </Link>
      {', 2018. '}
      <Link target="_blank" href="https://github.com/lachlanjc/nyu" hoverline>
        Open source
      </Link>
      .
    </Text>
  </Box.footer>
)

export default Footer
