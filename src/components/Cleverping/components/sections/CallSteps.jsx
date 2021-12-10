import React from 'react'
import { Flex, Box, HStack } from '@chakra-ui/layout'
import { ChevronRightIcon } from '@chakra-ui/icons'

const CallSteps = () => {
  return (
    <>
{/*Precisa centralizar verticalemnte o texto dos numeros*/}
<HStack maxW={1250} mt={25} h={100}>
      <Flex justify="space-around" align="center" w={["100%","100%","100%","75%","75%"]} h="100%" direction="row" color="#fff" bgColor="#396AB3" rounded="xl">
        <Flex fontSize="xl" align="center" ><Box fontSize="6xl" fontWeight="700" mr={15} as="span">1</Box> <Box>Search</Box></Flex>
        <ChevronRightIcon h={70} w={70} color="#ff723b"/>
        <Flex fontSize="xl" align="center"><Box fontSize="6xl" fontWeight="700" mr={15} as="span">2</Box> <Box>Compare</Box></Flex>
        <ChevronRightIcon h={70} w={70} color="#ff723b"/>
        <Flex fontSize="xl" align="center" ><Box fontSize="6xl" fontWeight="700" mr={15} as="span">3</Box> <Box>Call Us</Box></Flex>
      </Flex>
      <Flex w={["100%","100%","100%","25%","25%"]} bgColor="#ff723b" p="20px" fontWeight="bold" color="white" p="20px 30px" h="100%" rounded="xl" align="center" fontSize="xl" justifyContent="center">
        Call to Order
      </Flex>
</HStack>

    </>
    )}

export default CallSteps