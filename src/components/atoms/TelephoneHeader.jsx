import { Box, Link } from '@chakra-ui/layout'
import { PhoneIcon } from '@chakra-ui/icons'
import React from 'react'

const TelephoneHeader = () => {
  return (
    <>
    <Box display="flex" alignItems="center">
      <Box margin="5px" color="#fff" fontWeight="700">
      <PhoneIcon mr="5px" color="#fff" /><Link textDecor="none !important" href="tel:+18339803434" >
1 (833) 980-3434</Link>
      </Box>
    </Box>
    </>
  )
}

export default TelephoneHeader
