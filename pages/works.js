import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbDeltacrud from '../public/images/works/deltacrud_eyecatch.png'
import thumbSimplify from '../public/images/works/simplify_eyecatch.png'
import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="deltacrud"
              title="deltacrud"
              thumbnail={thumbDeltacrud}
            >
              A register management mobile app with cloud storage and create,
              read, update and delete operations support
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="simplify"
              title="simplify"
              thumbnail={thumbSimplify}
            >
              A taskboard application UI with drag and drop experimentaion with
              React DnD library and TailwindCSS
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
