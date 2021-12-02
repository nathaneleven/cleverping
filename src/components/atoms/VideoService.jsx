import React from 'react'
import { Flex, Box, Text, Stack, Heading, Link } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'

const VideoService = () => {
  return (
    <>
  <Stack maxW="1272px" justify="center" flexDirection={["column-reverse","column-reverse","column-reverse","column-reverse","row-reverse"]}>
      <Box pb={["25px","25px","25px","25px","0"]} w={["100%","100%","100%","100%","50%"]} m="auto">
          <Box align="left" p={["4","5","6","7","8"]}  w={["100%","100%","100%","100%","100%"]} m="auto">
              <Heading color="#396AB3" as="h3" pb="24px">
              Video
              </Heading>
              <Text pb="25px">
              To find the best TV plan available in your area, CleverPing® helps you choose considering the type, popularity and price of Video products.<br/><br/>
              For the most part, cable TV can be delivered through three different types of connections: wired, satellite, or streaming online. In rural areas, usually satellite offers are the best option.
              <br/><br/>
              By using this comparison tool, you can visualize all the most interesting offers by simply entering your ZIP Code. Also, get discounts with our partners bundling Video services and Internet all at once.
              </Text>
              <Link><Button colorScheme="orange" border="solid 3px #FF723B" color="#FF723B" size="lg" variant="outline" borderRadius="lg" py="30px">See Video</Button></Link>
          </Box>
      </Box>

      <Flex mt="0 !important" w={["100%","100%","100%","100%","50%"]} justify="center">
          <Image src="/video.svg" alt="About Image Altice" />
      </Flex>
  </Stack>
    </>
    )}

export default VideoService