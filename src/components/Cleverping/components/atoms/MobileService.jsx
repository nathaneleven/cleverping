import React from 'react'
import { Flex, Box, Text, Stack, Heading, Link } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'

const MobileService = () => {
  return (
    <>
  <Stack maxW="1272px" justify="center"  py="25px" flexDirection={["column-reverse","column-reverse","column-reverse","column-reverse","row-reverse"]}>
      <Box pb={["25px","25px","25px","25px","0"]} w={["100%","100%","100%","100%","50%"]} m="auto">
          <Box textAlign={["center","center","center","center","left"]} p={["4","5","6","7","8"]}  w={["100%","100%","100%","100%","100%"]} m="auto">
              <Heading color="#396AB3" as="h3" pb="24px">
              Mobile
              </Heading>
              <Text pb="25px">
              Whether you are looking for the best coverage, speeds or lowest price in a mobile data plan, CleverPing® can help you compare and purchase it in the easiest way.<br/><br/>
              Our experts can assist you by phone or, if you prefer, see yourself the offers and their particularities by entering your ZIP Code.<br/><br/>
              Check the cell phone plans available and set up your new account with us within minutes.
              </Text>
              <Link href="/mobile"><Button colorScheme="orange" border="solid 3px #FF723B" color="#FF723B" size="lg" variant="outline" borderRadius="lg" py="30px">See Mobile</Button></Link>
          </Box>
      </Box>

      <Flex  w={["90%","90%","90%","90%","50%"]} alignSelf="center" justify="center">
          <Image src="/cleverping/mobile.svg" alt="Image" />
      </Flex>
  </Stack>
    </>
    )}

export default MobileService