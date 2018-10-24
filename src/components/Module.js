import React from 'react'
import { Box, Flex, Heading, Icon, Text } from '@hackclub/design-system'
import { theme } from 'theme'
import PropTypes from 'prop-types'

const Module = ({ icon, name, body, ...props }) => (
  <Flex flexDirection={['row', 'column']} {...props}>
    <Icon
      size={48}
      mr={[3, null, 0]}
      mb={1}
      glyph={icon}
      color={props.color || 'inherit'}
      style={{ flexShrink: 0 }}
    />
    <Box>
      <Heading.h3 mb={1} fontSize={[3, 4]} children={name} />
      <Text
        fontSize={[2, 3]}
        style={{ fontFamily: theme.font, lineHeight: '1.375' }}
        children={body}
      />
    </Box>
  </Flex>
)

Module.displayName = 'Module'

Module.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  body: PropTypes.string
}

export default Module
