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
import Sheet from 'components/Sheet'
import Header from 'sections/Header'
import Footer from 'sections/Footer'

const projects = [
  {
    name: 'Fossil Funded',
    url: 'https://lachlanjc.me/fossil-funded',
    img: '/projects/fossil-funded.png',
    body: [
      'Our Congresspeople receive a shocking amount of fossil fuel funding – nearly $14 million just in 2016. Fossil Funded is a website I designed and built to make this information broadly available. Type in your address, and immediately see fossil fuel funding of your Representative in 2016, plus easy buttons to contact them by phone, letter, website, & Twitter.',
      'The site includes some analysis of the data, including the top contributors, the maximum recipient, the sum of contributions, and the gender and party biases of the funding companies.',
      'Technologies: Node.js, React.js, styled-components'
    ]
  },
  {
    name: 'Blink',
    url: 'https://blink.care',
    img: '/projects/blink.jpg',
    body: [
      'Blink is a communication tool for those who cannot speak or move, while being significantly more flexible, affordable, and accurate than current technologies on the market. Competitors cost $10,000+, but Blink costs less than $20 to build.',
      'To use it, physically blink letters in Morse code, and in real time caretakers can see the message from a phone. It’s a small, unobtrusive, wearable sensor.',
      'This project was a 3-person collaboration built in 36 hours at PennApps XVI. I built & designed the web/mobile apps & branding. We won Most Unique Hack ($1k grant from 1517) & the Health category.',
      'Technologies: React.js, Next.js, styled-components'
    ]
  },
  {
    name: 'Noodles',
    url: 'https://getnoodl.es',
    img: '/projects/noodles.png',
    body: [
      'Noodles, my first app, gives you one place for all your recipes.',
      'Technologies: Ruby on Rails, jQuery, React.js, SCSS',
      <Box my={2}>
        <A
          href="/projects/noodles-full.jpg"
          chevronRight
          children="Check out the design"
        />
        <br />
        <A
          href="/projects/noodles-process.jpg"
          chevronRight
          children="See the design process"
        />
      </Box>
    ]
  },
  {
    name: 'Call to Action',
    url: 'https://www.usecalltoaction.com',
    body: [
      'After the 2016 election, I worked on this project for a weekend with some friends. It lets you call your Congressperson with one tap.',
      <>
        This really resonated after the election—we got over 21,000 visitors in
        the first 24 hours, and features on{' '}
        <A
          href="https://techcrunch.com/2016/11/22/call-to-action-lets-you-phone-your-congressperson-with-just-a-tap/"
          children="TechCrunch"
        />
        ,{' '}
        <A
          href="https://lifehacker.com/call-to-action-makes-it-easy-to-find-and-call-your-cong-1789232987"
          children="Lifehacker"
        />
        , &{' '}
        <A
          href="https://www.bloomberg.com/news/articles/2017-02-09/silicon-valley-fights-trump-in-its-free-time"
          children="Bloomberg"
        />
        .
      </>
    ]
  },
  {
    name: 'Gasp! (zine)',
    url: 'https://gasp.netlify.com',
    img: '/projects/gasp.png',
    body: [
      'My high school has taught me essentially no sex ed, so there’s a significant need for education. This past summer, I worked with my local Planned Parenthood organizer to illustrate & design a comprehensive introductory zine aimed at 13–23-year-olds. I designed the layouts, diagrams, typography, contributed an essay, built the website, and created marketing materials. Beyond the zine itself, I also helped start a new Planned Parenthood sex ed class and organize a recent Trans Day of Solidarity event.',
      'Technologies: Figma, React.js, Next.js, styled-jsx'
    ]
  },
  {
    name: 'Hack Pennsylvania',
    url: 'https://hackpenn.com',
    img: '/projects/hackpenn.png',
    body: [
      <>
        While students on the coasts have dozens of hackathon events a year,
        Pennsylvania had none—until{' '}
        <A href="https://hackhappyvalley.com">Hack Happy Valley</A>! I founded &
        led Pennsylvania’s first high school hackathon, which ran June 2018. I’m
        now organizing Hack Pennsylvania, a 200+ person slated for next January,
        with a team of 6.
      </>
    ]
  },
  {
    name: 'Hack Club @ State High',
    url: 'https://statehigh.hackclub.com',
    img: '/projects/schacks.png',
    body: ['My high school ']
  }
]

const activities = [
  {
    name: 'Taekwondo',
    body:
      'Since fourth grade, I’ve been training weekly in taekwondo at Chaar Martial Arts here in State College. I practice forms, self-defense, board-breaking, and sparring. Spring 2017, I tested for and was promoted to first-dan black belt, as certified by the Kukkiwon.'
  },
  {
    name: 'TeenShale Network',
    body:
      'The TeenShale Network is a group of students at my high school working with researchers at Pennsylvania State University to monitor local water quality in relation to fracking in the Marcellus Shale region. We’re funded by grants, including from the NSF, and I’ve been an active member for four years, doing original field research, teaching new members, designing scientific posters and marketing materials, and presenting at a number of professional scientific conferences, including the 2017 Geological Society of America’s Regional Conference in Pittsburgh.'
  },
  {
    name: 'BYOQ youth group',
    body:
      'I’m an active member of BYOQ, the youth group of a local nonprofit, the Centre LGBTQ+ Support Network. We provide a safe space for queer, trans, and allied youth of all kinds, do social/community work, and promote inclusivity.<br />Beyond attending the group, I’ve gotten involving organizing the second annual Youth Summit, an upcoming all-day event for queer youth in December.'
  },
  {
    name: 'LGBTQA+ Alliance',
    body:
      'In previous years I have been an active member, but this year I’m a co-leader of the LGBTQA+ Alliance at my high school. We work to promote a fully inclusive and accepting local community, at the school and beyond, via staff trainings, political action, and social engagement, as well as providing a biweekly forum and support space for all students.<br />Last spring, I led a campaign (50+ active hours) to open gender-neutral bathrooms for all students at my school, including petitioning, meeting with school administration and school board members, and getting mentorship from a Planned Parenthood organizer.'
  },
  {
    name: 'Highrise intern',
    body:
      'In the summer of 2015, I was hired as a remote intern at Highrise, a multimillion-dollar online software company based in Chicago. Working for Highrise, I designed, built, and tested new features for their central application, increasing transparency and improving the collaboration tools in a legacy technical architecture.'
  }
]

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

const Projects = styled(Container).attrs({
  maxWidth: 72,
  mt: [3, 4],
  width: 1
})`
  ${theme.mediaQueries.sm} {
    column-gap: ${theme.space[3]}px;
    column-count: 2;
  }
  > div {
    background-color: rgba(255, 255, 255, 0.875);
    border-radius: ${theme.radii[2]};
    break-inside: avoid;
    overflow: hidden;
    transition: ${theme.transition} background-color;
    &:hover {
      background-color: rgba(255, 255, 255, 1);
    }
  }
  a {
    font-weight: bold;
    word-break: break-word;
    word-wrap: break-word;
    &:hover {
      text-decoration: underline;
    }
  }
`
// const Activities = styled(Projects)`
//   background: url(https://hackclub.com/pattern.svg);
// `
const LinkContainer = styled(Flex.withComponent(A)).attrs({
  target: '_blank'
})``
const Project = ({ name, body, img, url, ...props }) => (
  <Card my={3} {...props}>
    {img && <Image src={img} />}
    <Box p={[3, 4]}>
      <Heading.h3 fontSize={4} mt={0} mb={[1, 2]} children={name} />
      <Box fontSize={2} color="slate" my={0}>
        {body.map(p => (
          <Text key={p} children={p} my={1} />
        ))}
      </Box>
      {url && (
        <LinkContainer href={url} mt={3}>
          <Icon glyph="link" size={24} color={theme.colors.muted} />
          <Text.span
            bold
            fontSize={2}
            ml={2}
            children={url.replace('https://', '')}
          />
        </LinkContainer>
      )}
    </Box>
  </Card>
)

const Activity = ({ name, body, ...props }) => (
  <Card p={[3, 4]} my={3} {...props}>
    <Heading.h3 fontSize={4} mt={0} mb={2} children={name} />
    <Text
      dangerouslySetInnerHTML={{
        __html: body
      }}
      fontSize={2}
      color={theme.colors.slate}
    />
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

const Perspective = styled(Text.span).attrs({
  fontSize: [4, 5],
  bold: true
})`
  writing-mode: vertical-lr;
  float: right;
`

// linear-gradient(
//     ${props =>
//       props.inverted
//         ? 'rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)'
//         : 'rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.5)'}
//   ),
const PhotoSection = styled(Flex.withComponent('section')).attrs({
  align: 'center',
  justify: 'center'
})`
  position: relative;
  background: url(${props => props.src});
  background-position: center;
  background-size: cover;
`

const Identities = styled(Flex.withComponent('ul')).attrs({
  wrap: true,
  justify: 'center',
  mx: -3
})`
  list-style: none;
  padding: 0;
`
const Identity = styled(Text.withComponent('li')).attrs({
  color: 'white',
  fontSize: [2, 3],
  bold: true,
  mx: 2,
  my: 2
})`
  border-radius: ${theme.radii[1]};
  padding: 2px 10px;
`
const IDENTITY_COLORS = [
  'red.7',
  'orange.6',
  'lime.5',
  'teal.6',
  'blue.7',
  'violet.7',
  'fuschia.7'
]

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

const Mention = ({ img, name, ...props }) => (
  <Text.span style={{ whiteSpace: 'nowrap' }} {...props}>
    <Avatar
      src={img}
      size={24}
      alt={name}
      style={{ position: 'relative', top: 4 }}
    />{' '}
    {name}
  </Text.span>
)

export default () => (
  <Layout>
    <Header />
    <Section
      bg="snow"
      headline="My core design principles."
      lead="As designers making choices deeply impacting users, it’s imperative we stand for something. Here’s what I stand for."
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
    <PhotoSection
      src="/photos/Son650_01_8492_2048p.jpg"
      py={[5, 6]}
      style={{ minHeight: '90vh' }}
    >
      <Sheet maxWidth={48} align="left" p={[4, 5]} my={[4, 5]}>
        <Headline align="center" mb={4}>
          I bring a new perspective.
        </Headline>
        <Text fontSize={3} caps bold align="center" color={theme.colors.slate}>
          I am
        </Text>
        <Identities>
          {[
            'Radically inclusive',
            'Queer',
            'Activist',
            'Non-binary',
            'Designer',
            'Organizer',
            'Black belt in Taekwondo',
            'Web developer',
            'Quaker-educated',
            'Pennsylvanian',
            'Typography-obsessed',
            'Imaginative',
            'Music-loving'
          ].map((c, i) => (
            <Identity
              children={c}
              bg={theme.cx(IDENTITY_COLORS[i % IDENTITY_COLORS.length])}
            />
          ))}
        </Identities>
      </Sheet>
    </PhotoSection>
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
          is a worldwide, nonprofit network of high schooler-led coding clubs, &
          a community of young makers everywhere.
        </>
      }
    >
      <TextContainer mt={3}>
        <Text fontSize={3}>
          My involvement in Hack Club started when I began a coding club at my
          high school, in tenth grade. I soon joined the online community,
          getting to know the founder,{' '}
          <Mention img="https://hackclub.com/team/zach.jpg" name="Zach Latta" />
          . Fall 2017, I joined the team to lead design, coding, & marketing.
          Working 20+ hours/week remotely, I shipped new branding, multiple new
          websites & products for Hack Club.
        </Text>
        <Text fontSize={3} my={3}>
          Here’s one page I’m proud of. It’s a
        </Text>
      </TextContainer>
    </Section>
    <Box.section bg={theme.colors.nyu} color={theme.colors.black} width={1}>
      <Container py={[4, 5]} px={3}>
        <Headline color="white">Some past work.</Headline>
        <Projects>
          {projects.map(project => (
            <Project key={project.url} {...project} />
          ))}
        </Projects>
      </Container>
    </Box.section>
    <Box.section bg={theme.colors.smoke} color={theme.colors.black} width={1}>
      <Container py={[4, 5]} px={3}>
        <Headline align="center" color={theme.colors.nyu}>
          Into it all.
        </Headline>
        <Projects>
          {activities.map(activity => (
            <Activity key={activity.name} {...activity} />
          ))}
        </Projects>
      </Container>
    </Box.section>
    <Footer />
  </Layout>
)
