import React from 'react'
import { Box, Link } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

const LogoHeader = () => {
  return (
    <>
    <Box alignSelf="center">
      <Link href="/"><Image w={["120px","120px","120px","120px", "200px"]}  src="/cleverping/cleverping-logo.svg"/></Link>
    </Box>
    </>
  )
}

export default LogoHeader