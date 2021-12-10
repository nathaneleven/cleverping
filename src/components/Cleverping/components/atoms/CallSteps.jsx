import React from 'react'
import { Flex, Box, Stack } from '@chakra-ui/layout'
import { ChevronRightIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { useMediaQuery, Link } from '@chakra-ui/react'
import { phone_numbers_tel } from '../../../../../next-env.d'

const Arrow = () => {
  return(
    <ChevronRightIcon h={[42,42, 42, 50, 50]} w={[42,42, 42, 50, 50]} color="#ff723b"/>
  )
}

const CallSteps = () => {
  return (
    <>
{/*Precisa centralizar verticalemnte o texto dos numeros*/}
<Stack maxW={1250} mt={25} align="center" direction={["column", "column", "column", "row", "row"]}>
      <Flex justify="space-around" direction={["column", "column", "column", "row", "row"]} align="center" w={["100%","100%","100%","75%","75%"]} h="100%" border="1px solid white" color="#fff" bgColor="#396AB3" boxShadow="lg" rounded="xl">
        <Flex fontSize="xl" align="center" ><Box fontSize={["4xl","4xl","4xl","5xl","6xl"]} fontWeight="700" mr={15} as="span">1</Box> <Box>Search</Box></Flex>
        <Arrow/>
        <Flex fontSize="xl" align="center"><Box fontSize={["4xl","4xl","4xl","5xl","6xl"]} fontWeight="700" mr={15} as="span">2</Box> <Box>Compare</Box></Flex>
        <Arrow/>
        <Flex fontSize="xl" align="center" ><Box fontSize={["4xl","4xl","4xl","5xl","6xl"]} fontWeight="700" mr={15} as="span">3</Box> <Box>Call Us</Box></Flex>
      </Flex>
      <Link href={'tel:'+phone_numbers_tel.cleverping} w={["100%","100%","100%","25%","25%"]}><Flex cursor="pointer"  bgColor="#ff723b" fontWeight="bold" color="white" p="20px 30px" h="100%" rounded="xl" align="center" fontSize="xl" justifyContent="center">
        Call to Order
      </Flex></Link>
</Stack>

    </>
    )}

export default CallSteps