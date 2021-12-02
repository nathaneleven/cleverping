import React from 'react'
import { Flex, Box, Heading, Text, AspectRatio, Stack } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

const BestProviders = () => {
    return (
        <>
        <Image src="/best-providers-divider.svg" />

        <Box pb="40px" align="center" bgGradient="linear(to-r, #EAF9FF, #F6F5FF)">
        <Heading align="center" py="24px">
        The Best Providers
        </Heading>
        <Stack maxW="1272px" w="100%" flexDirection={["column-reverse","column-reverse","column-reverse","column-reverse","row-reverse"]}>

        <Box pb={["25px","25px","25px","25px","0"]} w={["100%","100%","100%","100%","50%"]} m="auto">
                <Box p={["4","5","6","7","8"]}  w={["100%","100%","100%","100%","100%"]} align="left" m="auto">
                    <Heading color="#396AB3" as="h3" pb="24px">
                    Explore the Best Services for You All in One Place.
                    </Heading>
                    <Text>
                    With CleverPing®, you can view multiple services from a single menu of the US most trusted brands.<br/><br/>
                    Our home service partners offer discounted rates when you bundle services together. You can set up TV, Internet and Phone bundles all at once. Easily find plans that meets your needs, including Streaming, Mobile and Home Security products.<br/><br/>
                    As an example: with our tool you can find fiber optic, satellite, and traditional internet cable services available and choose the best options for your area.
                    </Text>
                </Box>
        </Box>

            <Flex mt="0 !important" w={["100%","100%","100%","100%","50%"]} justify="center">
                    <Image src="/providers-image.png" alt="About Image Altice" />
            </Flex>
                </Stack>
                </Box>
        </>
    )}

export default BestProviders