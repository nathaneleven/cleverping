import React from 'react'
import { Flex, Box, Text, Spacer, Stack } from '@chakra-ui/layout'
import EmailForm from '../atoms/ZipForm'

const CtaCleverping = () => {

    return (
<>

<Stack zIndex="100" px="10" h="20vh" bgColor="#396AB3" color="#396AB3" justify="center" align="center"   >
        <Flex borderRadius="xl" maxW="1272px" mt={[-20, -20, -20, -26, -32]} bgColor="#fff" boxShadow="dark-lg" p="25px" direction={["column", "column", "column", "row", "row"]} >
            <Box pb={{base:5, md:0}}>
            <Text align={{base:"center", md:"left"}} fontWeight="700" lineHeight={[5, 5, 5, 8, 8]} m={1} pr={[0,0,0,5,5]} fontSize={["lg", "xl"]} >
            Don't See The Providers and Plans You Are Looking For? One of Our Experts Can Help!
            </Text>
            </Box>
            <Spacer />
            <EmailForm/>
        </Flex>
</Stack>
</>
    )}


export default CtaCleverping;
