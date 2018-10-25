import React from 'react'
import styled, { css } from 'styled-components'
import {
  Box,
  Container,
  Flex,
  Heading,
  Card,
  Image,
  Text,
  Link as A,
  Section,
  Icon
} from '@hackclub/design-system'
import { theme } from 'theme'
import data from 'data'
import Layout from 'components/Layout'
import Action from 'components/Action'
import Module from 'components/Module'
import Header from 'sections/Header'
import Footer from 'sections/Footer'

const Banner = styled(Container).attrs({
  maxWidth: 48,
  mt: 5,
  mb: [3, 4],
  mx: 'auto',
  px: 3,
  align: ['left', 'center']
})``

const Headline = styled(Heading.h2).attrs({
  color: theme.colors.black,
  fontSize: [5, 6],
  mb: 2
})`
  font-weight: 900;
  line-height: 1.125;
`

const Lead = styled(Container.withComponent(Text)).attrs({
  fontSize: 4,
  mx: 'auto'
})``

const Modules = styled(Container).attrs({
  mt: 4,
  maxWidth: 48,
  mx: 0,
  align: 'left'
})`
  display: grid;
  grid-gap: ${theme.space[3]}px;
  svg {
    color: ${theme.colors.nyuBright};
  }
  ${theme.mediaQueries.md} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${theme.space[4]}px;
  }
`

const Bannerline = props => (
  <Box
    bg={theme.colors.nyu}
    mt={[4, 5, 6]}
    mb={4}
    style={{ borderRadius: theme.radius, height: 4, width: '8rem' }}
    {...props}
  />
)

const Questions = styled(Container).attrs({ maxWidth: 72, mt: [3, 4] })`
  display: grid;
  grid-gap: ${theme.space[3]}px;
  width: 100%;
  ${theme.mediaQueries.sm} {
    grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
    grid-gap: ${theme.space[4]}px;
  }
  > div {
    background-color: rgba(255, 255, 255, 0.875);
    border-radius: ${theme.radii[2]};
    transition: ${theme.transition} all;
    box-shadow: ${theme.boxShadows[1]};
    &:hover {
      background-color: rgba(255, 255, 255, 0.95);
      box-shadow: ${theme.boxShadows[2]};
    }
  }
`
const Question = ({ name, body, ...props }) => (
  <Card p={[3, 4]} {...props}>
    <Heading.h3 f={2} color="altDark" caps mt={0} mb={[1, 2]} children={name} />
    <Text f={2} color="slate" my={0} children={body} />
  </Card>
)

export default () => (
  <Layout>
    <Header />
    <Box.section bg={theme.colors.snow}>
      <Container
        width={1}
        px={3}
        pt={3}
        pb={[4, 5, 6]}
        color={theme.colors.black}
      >
        <Container maxWidth={48} mx={0}>
          <Bannerline />
          <Headline>My core design principles.</Headline>
          <Lead maxWidth={48}>
            As designers making choices so deeply impact users, it’s utterly
            imperative we stand for something. Here’s what I stand for.
          </Lead>
        </Container>
        <Modules>
          <Module icon="zoom-out" name="Simple" body="“Less, but better.”" />
          <Module
            icon="rep"
            name="Fast"
            body="The internet hyperspeeds humanity. Don’t slow us down now."
          />
          <Module
            icon="history"
            name="Iterative"
            body="Design is never finished, especially on the web. Keep going."
          />
          <Module
            icon="support"
            name="Inclusive"
            body="Make the web accessible to everyone. Don’t let bad decisions exclude."
          />
        </Modules>
      </Container>
    </Box.section>
    {/* <Box.section bg={theme.colors.nyu} color={theme.colors.black} width={1}>
      <Container py={[4, 5]} px={3}>
        <Headline color="white">Some past work.</Headline>
        <Questions>
          <Question
            name=""
            body=""
          />
        </Questions>
      </Container>
    </Box.section> */}
    <Footer />
  </Layout>
)
