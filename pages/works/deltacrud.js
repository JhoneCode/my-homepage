import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="deltacrud">
      <Container>
        <Title>
          Deltacrud <Badge>2022</Badge>
        </Title>
        <P>
          A register management mobile app with cloud storage and create, read,
          update and delete operations support.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://github.com/JhoneCode/deltacrud-mobile">
              https://github.com/JhoneCode/deltacrud-mobile{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>IOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NodeJS, React Native, MongoDB</span>
          </ListItem>
          <ListItem>
            <Meta>Blogpost</Meta>
            <Link href="">
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/works/deltacrud_01.png" alt="deltacrud" />
        <WorkImage src="/images/works/deltacrud_02.png" alt="deltacrud" />
      </Container>
    </Layout>
  )
}

export default Work
