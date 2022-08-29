import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelComputerLoader from '../voxel-computer-loader'

const LazyVoxelComputer = dynamic(() => import('../voxel-computer'), {
  ssr: false,
  loading: () => <VoxelComputerLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Joao Vieira - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.xl" pt={14}>
        <LazyVoxelComputer />

        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
