import React from 'react'
import { Flex, Box, Text, Spacer } from '@chakra-ui/layout'
import EmailForm from '../atoms/EmailForm'

const Cta = () => {
    return (
<>

<Box p="8" bgColor="#396AB3" color="#396AB3" align="center"  >
        <Flex borderRadius="xl" maxW="1272px" bgColor="#fff" p="25px" direction={{base: "column", md: "row"}} >
            <Box pb={{base:5, md:0}}>
            <Text align={{base:"center", md:"left"}} fontWeight="700" fontSize="2xl" >
            Don't See The Providers and Plans You Are Looking For? One of Our Experts Can Help!
            </Text>
            </Box>
            <Spacer/>
            <EmailForm/>
        </Flex>
</Box>
<Box mb="-361px">
<svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="361.453" viewBox="0 0 1920 361.453">
  <path id="Path_8844" data-name="Path 8844" d="M809.967,1.78c43.388-.684,98.87.11,144.945,1.451C1000.22,4.572,1091.027,9.664,1147.853,13c145.521,8.815,256.678,12.183,369.755,13.606,45.307.575,93.495.958,198.508-.684S1920,18.917,1920,18.917V-334.349H0V8.3s138.226,8.925,304.1,8.35c75.256-.192,178.158-1.834,257.254-6.132C602.052,8.3,661.566,5.53,714.36,3.888,766.579,2.163,790.193,2.053,809.967,1.78Z" transform="translate(0 334.349)" fill="#396ab3"/>
</svg>
</Box>
</>
    )}


export default Cta
