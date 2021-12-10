import { Box, Link } from '@chakra-ui/layout'
import { PhoneIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/button'

import React from 'react'
import { phone_numbers, phone_numbers_tel } from '../../../../../next-env.d'
import { useMediaQuery, IconButton } from '@chakra-ui/react'

const TelephoneHeader = () => {

  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')

  return (
    <>
    <Box display="flex">
      {isLargerThan1280 && 
      <Box margin="5px" color="#000" fontWeight="700" align="center" w={["15%","15%","15%","15%", "30%"]}>
      <Link href={'tel:'+phone_numbers_tel.cleverping} textDecoration="none" w="100%"><Button textDecoration="none" leftIcon={<PhoneIcon w="30px"/>} colorScheme="orange" bgColor="#FF723B" size={["md","lg"]} p="10px" variant="solid" borderRadius="md" fontSize={["xs","xs","xs","xs","xl"]} fontWeight="bold">{isLargerThan1280 ? phone_numbers.cleverping : null}</Button></Link>
      </Box>
    }
    {!isLargerThan1280 &&
      <Box margin="5px" color="#000" fontWeight="700" align="center" w={["15%","15%","15%","15%", "30%"]}>
      <Link href={'tel:'+phone_numbers_tel.cleverping} textDecoration="none" w="100%"><Button  as={IconButton}  textDecoration="none" icon={<PhoneIcon w="30px"/>} colorScheme="orange" bgColor="#FF723B" size={["md","lg"]} p="5px" variant="solid" borderRadius="md" fontSize={["xs","xs","xs","xs","xl"]} /></Link>
      </Box>
    }
    </Box>
    </>
  )
}

export default TelephoneHeader