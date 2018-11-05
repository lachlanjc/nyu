import React from 'react'
import styled from 'styled-components'
import { Heading, Box } from '@hackclub/design-system'
import { theme } from 'theme'

const Base = styled(Box.withComponent('header')).attrs({
  align: 'center',
  color: 'white',
  py: [4, 5],
  px: [3, 5]
})`
  position: relative;
  background: url(${props => props.src});
  background-size: cover;
  background-position: center;
  min-height: 95vh;
  display: flex;
  flex-direction: column;
  h1 {
    flex: 1 1 auto;
  }
  h2 {
    display: inline-block;
    border-radius: ${theme.radii[2]};
  }
  mark {
    display: inline-block;
    width: fit-content;
    background: transparent url(/underline.svg) bottom left no-repeat;
    padding-bottom: ${theme.space[2]}px;
    background-size: 100% ${theme.space[3]}px;
    color: inherit;
  }
  ${theme.mediaQueries.md} {
    ${!(typeof window !== 'undefined'
      ? window.navigator.userAgent.includes('iPad')
      : true) && {
      backgroundAttachment: 'fixed'
    }};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${theme.space[7]}px;

    h1 {
      text-align: right;
    }
    h2 {
      text-align: left;
      align-self: flex-end;
    }
  }
`

export default () => (
  <Base src="/photos/intro.jpg">
    <Heading.h1 fontSize={[5, 6]}>
      <span style={{ fontWeight: 'normal' }}>Hi! I’m</span>
      <br />
      <mark>Lachlan Campbell.</mark>
    </Heading.h1>
    <Heading.h2
      fontSize={[3, 4, 5]}
      mt={3}
      mx="auto"
      bg={theme.colors.nyu}
      color={theme.colors.white}
      py={2}
      px={3}
    >
      I want to study @ NYU in Interactive Media Arts.
    </Heading.h2>
  </Base>
)
