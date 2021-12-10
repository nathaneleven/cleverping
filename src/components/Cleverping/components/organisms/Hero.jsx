import React from 'react'
import { Flex, Box, Heading, Text, Stack } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

const HeroCleverping = () => {
    return (
        <>
        <Stack mb="-1px" bgImage="/hero-divider.svg" bgPosition="bottom" bgRepeat="no-repeat" bgSize={{base: "100% 100px", xl: "100% 300px"}} w="100%" py={36} justify="center" flexDirection={["column-reverse","column-reverse","column-reverse","column-reverse","row"]}>
        {/*Retirei um flex e adicionei um box para facilitar o alinhamento*/}
        <Box pb={["25px","25px","25px","25px","0"]} w={["100%","100%","100%","50%","50%"]} m="auto">
        {/*a width vai ser a responsável pelo alinamento da div de texto*/}
        <Box p={["4","5","6","7","8"]}  w={["100%","100%","100%","100%","75%"]} m="auto">
            <Heading as="h1" mb="24px">
            Now It's Easy to Shop the Best Providers for Your Home Needs
            </Heading>
            <Text
            fontSize={["lg","lg","lg","lg","lg"]}
            color="gray.700"
            >
            CleverPing®, in just a few seconds, helps you compare, and purchase the <strong>Top Internet, TV, Mobile, Phone and Home Security</strong> services. With this free tool, you will have access to thousands of special offers and plans from local service providers in your area.
            </Text>
        </Box>
        </Box>
        {/*correção de breakpoints*/}
        <Flex w={["85%","85%","85%","50%","50%"]} mt="0"  mb={["10px", "10px", "10px", "0px", "0px"]} textAlign="center" justify="center" alignSelf="center" >
            <Image align="center" src="/cleverping/hero-image-cleverping.svg" alt="CleverPing Hero Image" />
        </Flex>
        </Stack>
        </>
    )
}

export default HeroCleverping
