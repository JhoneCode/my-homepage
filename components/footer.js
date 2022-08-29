import { Box, Text, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

const Footer = () => {
  return (
    <Box align="center" mt="calc(100vh - 778px)" opacity={0.5} fontSize="sm">
      <Text>
        &copy; {new Date().getFullYear()} Takuya Matsuyama. All Rights Reserved.
        This website is built based on the{' '}
        <NextLink
          href="https://www.craftz.dog/"
          target="_blank"
          rel="noreferrer"
        >
          <Link>Takuya Matsuyama&apos;s website</Link>
        </NextLink>
        .
      </Text>
    </Box>
  )
}

export default Footer
