import React from 'react'
import { Flex, Box, Text, Stack, Heading, Link } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'

const PhoneService = () => {
  return (
    <>
  <Stack maxW="1272px" justify="center"  py="25px" flexDirection={["column-reverse","column-reverse","column-reverse","column-reverse","row"]}>
      <Box pb={["25px","25px","25px","25px","0"]} w={["100%","100%","100%","100%","50%"]} m="auto">
          <Box textAlign={["center","center","center","center","left"]} p={["4","5","6","7","8"]}  w={["100%","100%","100%","100%","100%"]} m="auto">
              <Heading color="#396AB3" as="h3" pb="24px">
              Phone
              </Heading>
              <Text pb="25px">
              Get a home telephone plan that works for you – whether that is simply telephone or a package with TV, web and the sky is the limit from there.<br/><br/>
              Easily compare landline providers available in your area and the features offered by them. When it comes to home services, CleverPing® always puts quality and security first, so you’ll be choosing between the most reliable companies in the U.S. territory.
              </Text>
              <Link href="/phone"><Button colorScheme="orange" border="solid 3px #FF723B" color="#FF723B" size="lg" variant="outline" borderRadius="lg" py="30px">See Phone</Button></Link>
          </Box>
      </Box>

      <Flex  w={["90%","90%","90%","90%","50%"]} alignSelf="center" justify="center">
          <Image src="/cleverping/phone.svg" alt="Image" />
      </Flex>
  </Stack>
    </>
    )}

export default PhoneService