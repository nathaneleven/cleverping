import React from 'react'
import { Flex, Box, Text, Spacer } from '@chakra-ui/layout'
import EmailForm from '../atoms/EmailForm'

const Cta = () => {
    return (
<>
<Box p="8" bgColor="#000" color="white" align="center"  >
        <Flex maxW="1272px" align="center" direction={{base: "column", md: "row"}} >
            <Box pb={{base:5, md:0}}>
            <Text fontWeight="700" fontSize="2xl" >
            See Altice deals in your area
            </Text>
            </Box>
            <Spacer/>
            <EmailForm/>
        </Flex>
</Box>
</>
    )}


export default Cta
