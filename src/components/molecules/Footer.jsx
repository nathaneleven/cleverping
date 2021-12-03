import React from 'react'
import { Box, Flex, Link, Spacer, Text, Heading, List, ListItem } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'
import LogoHeader from '../atoms/Logo'

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
    </Box>
    <Box border="1" fontWeight="700" bgColor="#fff" color="#707070" align="center">

        <Box p="25px">
        <Flex maxW="1272px">
            <Box align="left">
                <Heading color="#396AB3" as="h4" fontSize="20px" pb="5px">INTERNET</Heading>
                <List>
                    <ListItem>Cable Internet</ListItem>
                    <ListItem>DSL Internet</ListItem>
                    <ListItem>Fiber Internet</ListItem>
                    <ListItem>Satellite Internet</ListItem>
                    <ListItem>Fixed Wireless</ListItem>
                </List>
            </Box>
            <Spacer/>
            <Box align="left">
                <Heading color="#396AB3" as="h4" fontSize="20px"  pb="5px">TV</Heading>
                <List>
                    <ListItem>Cable TV</ListItem>
                    <ListItem>Satellite TV</ListItem>
                    <ListItem>Streaming TV</ListItem>
                </List>
            </Box>
            <Spacer/>
            <Box align="left" >
                <Heading color="#396AB3" as="h4" fontSize="20px"  pb="5px">INTERNET</Heading>
                <List spacing="3">
                    <ListItem display="flex" alignItems="center"><Image pr="10px" src="/bundles-icon.svg"/>BUNDLES</ListItem>
                    <ListItem display="flex" alignItems="center"><Image pr="10px" src="/mobile-icon.svg"/>MOBILE</ListItem>
                    <ListItem display="flex" alignItems="center"><Image pr="10px" src="/home-security-icon-bottom.svg"/>HOME-SECURITY</ListItem>
                </List>
            </Box>
        </Flex>
        </Box>

        <Box p="25px" bgColor="#F1F1F1">
        <Flex maxW="1272px">
            <Box align="left">
                <Heading color="#396AB3" as="h4" fontSize="20px" pb="5px">Our Providers</Heading>
                <Flex>
                <Box w="50%">
                <List>
                <ListItem>AT&T</ListItem>
                <ListItem>CenturyLink</ListItem>
                <ListItem>Frontier</ListItem>
                <ListItem>DIRECTV</ListItem>
                <ListItem>Spectrum</ListItem>
                <ListItem>HughesNet</ListItem>
                <ListItem>Dish</ListItem>
                <ListItem>Ziply Fiber</ListItem>
                <ListItem>Altice</ListItem>
                <ListItem>Optimum</ListItem>
                <ListItem>Cox</ListItem>
                </List>
                </Box>
                <Box w="50%">
                <List>
                <ListItem>Windstream</ListItem>
                <ListItem>EarthLink</ListItem>
                <ListItem>MetroNet</ListItem>
                <ListItem>WOW</ListItem>
                <ListItem>Rise Broadband</ListItem>
                <ListItem>Medicom</ListItem>
                <ListItem>Buckeye Broadband</ListItem>
                <ListItem>Bendbroad Band</ListItem>
                <ListItem>TDS Telecom</ListItem>
                <ListItem>Smithville</ListItem>
                <ListItem>Verizon</ListItem>
                </List>
                </Box>
                </Flex>
            </Box>
            <Spacer/>
            <Box align="left">
                <Heading color="#396AB3" as="h4" fontSize="20px"  pb="5px">States</Heading>
                <List>
                    <ListItem>Cable TV</ListItem>
                    <ListItem>Satellite TV</ListItem>
                    <ListItem>Streaming TV</ListItem>
                </List>
            </Box>
            <Spacer/>
            <Box align="left">
                <Heading color="#396AB3" as="h4" fontSize="20px"  pb="5px">Company</Heading>
                <List>
                <ListItem>About Us</ListItem>
                <ListItem>Resources</ListItem>
                <ListItem>Privacy Policy</ListItem>
                <ListItem>Terms & Conditions</ListItem>
                <ListItem>Do Not Sell My Info</ListItem>
                <ListItem>SiteMap</ListItem>
                <ListItem display="flex"><Image pr="10px" src="/facebook.svg"/><Image pr="10px" src="/twitter.svg"/><Image pr="10px" src="/linkedin.svg"/><Image pr="10px" src="/instagram.svg"/></ListItem>
                </List>
            </Box>
        </Flex>
        </Box>
    </Box>
            
            <Box p="8" bgColor="#fff" color="#000" align="center"  >
                <Box alignSelf="center" w="100%">
                <Link href="/"><Image w="200px"  src="/cleverping-logo.svg"/></Link>
                </Box>
            </Box>
            <Box p="3" bgColor="#F1F1F1" color="#707070" align="center"  >
            <Link href="tel:+18339803434"><Text fontSize="xl" >© 2021 CleverPing.com - A Eleven Rush Company All Rights Reserved.</Text></Link>
            </Box>
    </>
)}
export default Footer