import React from 'react'
import { Box, SimpleGrid, Heading, Text, Flex, Spacer} from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import CallSteps from '../atoms/CallSteps'


const WhyUseCleverping = () => {
    return (
<>
{/*Precisa aplicar um "show more snippet"*/}

<Box align="center" bgColor="#396ab3" p={{base:"10", md:"0 10 "}}>
    <Heading color="#fff" mb="10">Why use CleverPing?</Heading>

    <SimpleGrid columns={{base:"1", md:"4"}} spacing={10} maxW="1272px" >
      <Flex bgColor="#fff" rounded="xl" shadow="lg"  p="5" align="center" direction="column" >
      <Box py="15px">
      <Image src="/cleverping/real-time.svg"/>
  
      </Box>
        <Heading pb="15px" as="h3" fontSize="2xl" color="#000">Real-Time Price
Updates</Heading>
        <Text>We curate live authentic data so you get up-to-date plans and pricing.</Text>
      </Flex>
  
      <Flex bgColor="#fff" rounded="xl" shadow="lg"  p="5" align="center" direction="column" >
      <Box py="15px">
      <Image src="/cleverping/best-deals.svg"/>
  
      </Box>
  
        <Heading pb="15px" as="h3" fontSize="2xl" color="#000">The Best Deals for You</Heading>
        <Text>See what new customer and other special offers are available near you.</Text>
      </Flex>
  
      <Flex bgColor="#fff" rounded="xl" shadow="lg"  p="5" align="center" direction="column" >
      <Box py="15px">
      <Image src="/cleverping/easy-ordering.svg"/>
  
      </Box>
  
        <Heading pb="15px" as="h3" fontSize="2xl" color="#000">Easy Ordering</Heading>
        <Text>You are one phone call away to find the perfect deal</Text>
      </Flex>
  
      <Flex bgColor="#fff" rounded="xl" shadow="lg"  p="5" align="center" direction="column" >
      <Box py="15px">
      <Image src="/cleverping/trusted-brands.svg"/>
      </Box>
        <Heading pb="15px" as="h3" fontSize="2xl" color="#000">Trusted Brands</Heading>
        <Text>Get reliable packages to fit your household's needs.</Text>
      </Flex>
    </SimpleGrid>
    <CallSteps/>
</Box>
</>
    )}



export default WhyUseCleverping;