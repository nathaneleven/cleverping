import React from 'react'
import { Flex, Box, Text, Stack, Heading, Link } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'

const InternetService = () => {
  return (
    <>
  <Stack maxW="1272px" justify="center"  py="25px" flexDirection={["column-reverse","column-reverse","column-reverse","column-reverse","row"]}>
      <Box pb={["25px","25px","25px","25px","0"]} w={["100%","100%","100%","100%","50%"]} m="auto">
          <Box textAlign={["center","center","center","center","left"]} p={["4","5","6","7","8"]}  w={["100%","100%","100%","100%","100%"]} m="auto">
              <Heading color="#396AB3" as="h3" pb="24px">
              Internet
              </Heading>
              <Text pb="25px">
              Start with a search of which internet plans are available in your area, or give us a quick call to speak with one of our experts.<br/><br/>
              Once you find a plan that suits your needs from one of the top internet service providers across the US, we’ll be ready to set up your home internet for you<br/><br/>
              Make CleverPing® your go-to resource when searching for the best broadband for you and your family.
              </Text>
              <Link><Button colorScheme="orange" border="solid 3px #FF723B" color="#FF723B" size="lg" variant="outline" borderRadius="lg" py="30px">See Internet</Button></Link>
          </Box>
      </Box>

      <Flex mt="0 !important" w={["100%","100%","100%","100%","50%"]} justify="center">
          <Image src="/internet.svg" alt="About Image Altice" />
      </Flex>
  </Stack>
    </>
    )}

export default InternetService