import React from 'react'
import { Flex, Box, Heading, Text, AspectRatio, Stack } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

const About = () => {
    return (
        <>
        <Stack bgColor="#fff" w="100%" justify="center" flexDirection={["column-reverse","column-reverse","column-reverse","column-reverse","row-reverse"]}>

        <Box pb={["25px","25px","25px","25px","0"]} w={["100%","100%","100%","100%","50%"]} m="auto">
                <Box p={["4","5","6","7","8"]}  w={["100%","100%","100%","100%","100%"]} m="auto">
                    <Heading color="#000" mb="24px">
                    About Altice
                    </Heading>
                    <Text>
                    Altice USA is a communications and media company that enables its customers through the power of connectivity. From high-speed broadband and ultra-HD video, to digital advertising solutions, local news, telephony, and wireless offerings, we are making connections possible around the United States.<br/><br/>

                    The company decided to increase the speed of its “Altice Advantage Internet” affordable broadband product at no additional cost and rename the service “Optimum Advantage Internet.” The new and enhanced service is available to eligible households across Altice USA’s Optimum and Suddenlink service areas. 
                    </Text>
                </Box>
        </Box>

            <Flex mt="0 !important" w={["100%","100%","100%","100%","50%"]} justify="flex-start">
                <AspectRatio w={["100%","100%","100%","100%","100%"]} mb={["10px","20px","30px","30px","50px"]} ratio={[3, 3, 3, 3, 6/4]} >
                    <Image objectPosition={["0 -34px","0 -40px","0 -50px","0 -60px", "0px"]} borderRadius={{xl: "0 0 70px 0"}} src="/about-altice-image.jpg" alt="About Image Altice" />
                </AspectRatio>
            </Flex>
                </Stack>
        </>
    )}

export default About