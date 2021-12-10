import React from 'react'
import { Box, SimpleGrid, Heading, Text, Flex } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

const ServiceTypeCleverping = () => {
    return (
<>

<Box align="center" bgColor="#396AB3" p={{base:"10", md:"0 10 "}}>
  <Heading color="#fff" py="40px">Or search for internet providers by service type:</Heading>
    <SimpleGrid maxW="1272px" columns={{base:"1", md:"3"}} spacing={10}>
      
    <Flex p="5" bgColor="#fff" rounded="xl" shadow="md" align="center" direction="column" >
    <Box py="15px">
    <Image src="/cleverping/dsl.svg"/>

    </Box>
      <Heading pb="15px" as="h3" fontSize="2xl" color="#000">DSL</Heading>
      <Text>The DSL (Digital Subscriber Line) connection was the first broadband option that emerged in the country. It is still very popular today and its main feature is that it needs a telephone line to work, as it uses the structure of the telephone network.<br/><br/>
      Unlike dial-up Internet, the DSL allows the user to surf while using the phone, as it has a specific router. It tends to be a more economical option, not offering high speeds — although more modern versions of this technology are already capable of reaching up to 100 Mbps.</Text>
    </Flex>

    <Flex p="5" bgColor="#fff" rounded="xl" shadow="md" align="center" direction="column" >
    <Box py="15px">
    <Image src="/cleverping/satellite.svg"/>

    </Box>

      <Heading pb="15px" as="h3" fontSize="2xl" color="#000">Satellite</Heading>
      <Text>Satellite internet service emerged to provide access to a broadband connection without the need for cables. It is a great option for those who live in rural areas and do not have access to the Internet through the most conventional means.<br/><br/>
      Today, this technology is a form of internet access that allows a higher connection speed. The connection is made between the satellite and a receiver installed in your home.</Text>
    </Flex>

    <Flex p="5" bgColor="#fff" rounded="xl" shadow="md" align="center" direction="column" >
    <Box py="15px">
    <Image src="/cleverping/cable.svg"/>

    </Box>

      <Heading pb="15px" as="h3" fontSize="2xl" color="#000">Cable</Heading>
      <Text>The operation of the cable connection is very similar to DSL — the difference is that, instead of the telephone line, the network cabling structure is used here — the UTP cable. It is one of the most common connections available on the market.<br/><br/>
      This technology allows for very high connection speeds and is great for using torrents and the like, as its upload rate is very good. </Text>
    </Flex>

    <Flex p="5" bgColor="#fff" rounded="xl" shadow="md" align="center" direction="column" >
    <Box py="15px">
    <Image src="/cleverping/fiberoptic.svg"/>

    </Box>

      <Heading pb="15px" as="h3" fontSize="2xl" color="#000">Optical Fiber</Heading>
      <Text>The operation of the cable connection is very similar to DSL — the difference is that, instead of the telephone line, the network cabling structure is used here — the UTP cable. It is one of the most common connections available on the market.<br/><br/>
      This technology allows for very high connection speeds and is great for using torrents and the like, as its upload rate is very good. </Text>
    </Flex>

    <Flex p="5" bgColor="#fff" rounded="xl" shadow="md" align="center" direction="column" >
    <Box py="15px">
    <Image src="/cleverping/fixed-wireless.svg"/>

    </Box>

      <Heading pb="15px" as="h3" fontSize="2xl" color="#000">Fixed Wireless</Heading>
      <Text>Fixed wireless internet is broadcast from towers through airwaves to receivers that the service provider will have installed on the user's property.<br/><br/>
      High-end fixed wireless employs broadband modems that bypass the telephone system and offer internet access hundreds of times faster than twisted-pair hard-wired telephone connections or cell-phone connection modems. </Text>
    </Flex>
  </SimpleGrid>

</Box>

</>
    )}

export default ServiceTypeCleverping;