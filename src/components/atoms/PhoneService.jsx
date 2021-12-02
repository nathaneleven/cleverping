import React from 'react'
import { Flex, Box, Text, Stack, Heading, Link } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { Image } from '@chakra-ui/image'

const PhoneService = () => {
  return (
    <>
  <Stack maxW="1272px" justify="center" flexDirection={["column-reverse","column-reverse","column-reverse","column-reverse","row"]}>
      <Box pb={["25px","25px","25px","25px","0"]} w={["100%","100%","100%","100%","50%"]} m="auto">
          <Box align="left" p={["4","5","6","7","8"]}  w={["100%","100%","100%","100%","100%"]} m="auto">
              <Heading color="#396AB3" as="h3" pb="24px">
              Phone
              </Heading>
              <Text pb="25px">
              Get a home telephone plan that works for you – whether that is simply telephone or a package with TV, web and the sky is the limit from there.<br/><br/>
              Easily compare landline providers available in your area and the features offered by them. When it comes to home services, CleverPing® always puts quality and security first, so you’ll be choosing between the most reliable companies in the U.S. territory.
              </Text>
              <Link><Button colorScheme="orange" border="solid 3px #FF723B" color="#FF723B" size="lg" variant="outline" borderRadius="lg" py="30px">See Phone</Button></Link>
          </Box>
      </Box>

      <Flex mt="0 !important" w={["100%","100%","100%","100%","50%"]} justify="center">
          <Image src="/phone.svg" alt="About Image Altice" />
      </Flex>
  </Stack>
    </>
    )}

export default PhoneService