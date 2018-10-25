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
    text-shadow: 0 0 4px ${theme.colors.violet[4]};
  }
  mark {
    display: inline-block;
    background: transparent url(/underline.svg) bottom left no-repeat;
    background-size: 100% ${theme.space[3]}px;
    color: inherit;
  }
  // span {
  //   display: inline-block;
  //   background-color: ${theme.colors.nyuBright};
  //   color: inherit;
  //   padding: ${theme.space[1]}px ${theme.space[3]}px 0;
  //   border-radius: ${theme.radii[2]};
  // }
  ${theme.mediaQueries.md} {
    background-attachment: fixed;
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
  <Base src="/photos/Son650_01_8508_2048p.jpg">
    <Heading.h1 fontSize={[6, 7, 8]}>
      <span style={{ fontWeight: 'normal' }}>Hi, I’m</span>
      <br />
      <mark>@lachlanjc.</mark>
    </Heading.h1>
    <Heading.h2
      fontSize={[3, 4, 5]}
      mt={3}
      mx="auto"
      bg={theme.colors.nyu}
      color={theme.colors.white}
      p={2}
    >
      I want to study @ NYU in Interactive Media Arts.
    </Heading.h2>
  </Base>
)
