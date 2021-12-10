import React from 'react'
import { Flex, Box, Text, Spacer } from '@chakra-ui/layout'
import EmailForm from '../atoms/EmailForm'
import { Image } from '@chakra-ui/image'

const CtaFooter = () => {
    return (
<>

<Box px="10" bgGradient="linear(to-b, #EAF9FF, #F6F5FF)" color="#396AB3" align="center"  >
        <Flex align="center" borderRadius="xl" maxW="1272px" p="25px" direction={{base: "column", xl: "row"}} >
            <Box p={{base:5, xl:"0 2 0 0"}}>
            <Image src="newsletter.svg" />
            </Box>
            <Spacer/>
            <Box p={{base:5, xl:"0 2 0 0"}}>
            <Text align={{base:"center", xl:"left"}} fontWeight="700" fontSize="2xl" >
            Subscribe to our weekly specials for internet news and promos
            </Text>
            </Box>
            <Spacer/>
            <EmailForm/>
        </Flex>
</Box>
</>
    )}


export default CtaFooter
