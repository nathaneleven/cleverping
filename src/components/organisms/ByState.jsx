import React from 'react'
import { Flex, Box, Heading, Text, AspectRatio, Stack } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

const ByState = () => {
    return (
        <>

        
        <Box m="auto" p="30px 40px">
            <Box align="center" maxW="1272px" m="auto" pb="40px">
                <Heading pb="24px">
                Explore By State
                </Heading>
                <Text>How do I know <strong>what are the multiple providers in my area?</strong> We created CleverPing® to answer that question for you. By showing all the provider offers in one place, we reduce the research time and the possible stress of looking for the best services for any location in the U.S territory.
                </Text>
            </Box>
            {/*correção de breakpoints*/}
            <Flex justify="center">
                <Image align="center" src="/usa-map.svg" alt="CleverPing Hero Image" />
            </Flex>
        </Box>
        </>
    )
}

export default ByState
