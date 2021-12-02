import React from 'react'
import { Button } from '@chakra-ui/button'
import { Text, Flex, Box, Spacer } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

const CallSteps = () => {
  return (
    <>
{/*Precisa centralizar verticalemnte o texto dos numeros*/}
<Flex maxW="1250px" pt="25px" flexWrap="wrap">
      <Flex align="center" w={["100%","100%","100%","75%","75%"]} p="20px 30px" color="#fff" bgColor="#396AB3" rounded="xl">
        <Text verticalAlign="" fontSize="20px"><Box fontSize="43px" fontWeight="700" as="span">1</Box> Search</Text>
        <Spacer/><Box><Image src="/arrow-steps.svg"/></Box><Spacer/>
        <Text fontSize="20px"><Box fontSize="43px" fontWeight="700" as="span">2</Box> Compare</Text>
        <Spacer/><Box><Image src="/arrow-steps.svg"/></Box><Spacer/>
        <Text fontSize="20px"><Box fontSize="43px" fontWeight="700" as="span">3</Box> Call Us</Text>
      </Flex>
      <Flex w={["100%","100%","100%","25%","25%"]} p="20px" justifyContent="flex-end">
        <Box alignSelf="center" w="100%" ><Button w="100%" fontSize="2xl" colorScheme="orange" rounded="md" bgColor="#FF723B" px="40px" size="lg" variant="solid" borderRadius="sm">Call to Order</Button></Box>
      </Flex>
    </Flex>

    </>
    )}

export default CallSteps