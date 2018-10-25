import React from 'react'
import styled, { css } from 'styled-components'
import {
  Box,
  Container,
  Flex,
  Avatar,
  Heading,
  Card,
  Image,
  Text,
  Link as A,
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
const NoThanks = styled(Text.span).attrs({
  fontSize: 1,
  caps: true,
  mt: 1
})`
  display: block;
  text-decoration: line-through;
  opacity: 0.5;
`

const TextContainer = styled(Box).attrs({ maxWidth: 48 })`
  max-width: ${({ maxWidth }) => maxWidth}rem;
`

const Section = ({
  bg = 'white',
  bannerWidth = 48,
  lineColor = 'primary',
  headline,
  lead,
  children,
  ...props
}) => (
  <Box.section bg={theme.colors[bg]} color={theme.colors.black} {...props}>
    <Container width={1} px={3} pt={3} pb={[4, 5, 6]}>
      <TextContainer maxWidth={bannerWidth} mb={3}>
        <Bannerline bg={theme.colors[lineColor]} />
        <Headline children={headline} />
        <Lead children={lead} />
      </TextContainer>
      {children}
    </Container>
  </Box.section>
)

export default () => (
  <Layout>
    <Header />
    <Section
      bg="snow"
      headline="My core design principles."
      lead="As designers making choices so deeply impacting users, it’s
            imperative we stand for something. Here’s what I stand for."
    >
      <Modules>
        <Module
          icon="zoom-out"
          name="Simple"
          body={
            <>
              “Less, but better.”
              <NoThanks>“More, but worse.”</NoThanks>
            </>
          }
        />
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
    </Section>
    <Section
      lineColor="hackClub"
      headline="My most defining work comes at Hack Club."
      lead={
        <>
          <A
            href="https://hackclub.com"
            target="_blank"
            color={theme.colors.hackClub}
          >
            Hack Club
          </A>{' '}
          is a worlwide, nonprofit network of high schooler-led coding clubs, &
          a community of young makers everywhere.
        </>
      }
    >
      <TextContainer mt={3}>
        <Text fontSize={3}>
          My involvement in Hack Club started when I began a coding club at my
          high school, in tenth grade. I soon joined the online community,
          getting to know{' '}
          <Avatar
            src="https://hackclub.com/team/zach.jpg"
            size={24}
            alt="Zach Latta"
            style={{ position: 'relative', top: 4 }}
          />{' '}
          Zach Latta, the founder.
        </Text>
      </TextContainer>
    </Section>
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
