import React from 'react'
import { Box, Flex, Link, Spacer, Text } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'

const  Footer = () => {
    return (
    <>
        <Box border="1" fontWeight="700" bgColor="#396AB3" color="#fff" align="center">
            <Flex p={{base:"8", xl:"50px 0"}} maxW="1272px" align="center" direction={{base: "column", md: "row"}} >
                <Box p="3">
                    <Text align={{base:"center", md:"start"}} fontSize="2xl">
                    Ready to Order? Shop With CleverPing
                    </Text>
                </Box>
                <Spacer/>
                <Link textDecor="none !important" href="tel:+18339803434"><Button colorScheme="orange" fontSize="2xl" bgColor="#FF723B" size="lg" variant="solid" borderRadius="md" py="30px">(833) 980-3434</Button></Link>
            </Flex>
            <Box p="8" bgColor="#222" color="#fff" align="center"  >
                <Flex maxW="1272px" align="center" direction={{base: "column", md: "row"}} >
                    <Box pb={{base:5, md:0}}>
                        <Text fontSize="2xl" >
                        Call Now To Speak With One Of Our Experts
                        </Text>
                    </Box>
                    <Spacer/>
                    <Flex align="center">
                        <Link href="tel:+18339803434" fontSize="2xl" >
                        1 (833) 980-3434
                        </Link>
                    </Flex>
                </Flex>
            </Box>
            <Box p="3" bgColor="#000" color="white" align="center"  >
            <Link href="tel:+18339803434"><Text fontSize="xl" >Call 1 (833) 980-3434 to Order Now</Text></Link>
            </Box>
        </Box>
    </>
)}
export default Footer