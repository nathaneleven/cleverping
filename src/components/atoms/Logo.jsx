import React from 'react'
import { Box, Link } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

const LogoHeader = () => {
  return (
    <>
    <Box>
      <Link href="/"><Image w="200px" src="/altice-logo-png-horizontal.png"/></Link>
    </Box>
    </>
  )
}

export default LogoHeader