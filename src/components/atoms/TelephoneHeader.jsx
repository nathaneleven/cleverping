import { Box, Link } from '@chakra-ui/layout'
import { PhoneIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/button'

import React from 'react'

const TelephoneHeader = () => {
  return (
    <>
    <Box display="flex" alignItems="center">
      <Box margin="5px" color="#000" fontWeight="700">
      <Button leftIcon={<PhoneIcon />} colorScheme="orange" bgColor="#FF723B" size="lg" variant="solid" borderRadius="md" fontSize="2xl" py="30px">(833) 980-3434</Button>
      </Box>
    </Box>
    </>
  )
}

export default TelephoneHeader