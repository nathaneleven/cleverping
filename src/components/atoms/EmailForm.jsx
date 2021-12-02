import React from 'react'
import { Flex } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/input'
import { Button } from '@chakra-ui/button'

const EmailForm = () => {
  return (
    <>
            <Flex align="center" >
                <Input w="80%" focusBorderColor="blue.500" colorScheme="black" borderRadius="md" placeholder="Enter Zip Code" size="lg" variant="filled" mr="3" />
                <Button colorScheme="orange" bgColor="#FF723B" px="40px" size="lg" variant="solid" borderRadius="md">Check Availability</Button>
            </Flex>
    </>
  )}

  export default EmailForm