import React from 'react'
import { Flex } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/input'
import { Button } from '@chakra-ui/button'
import { InputLeftElement, InputGroup, Stack } from '@chakra-ui/react'
import { GrLocation } from 'react-icons/gr'
import Cookies from "js-cookie";


const ZipForm = () => {
  const [zip, setZip] = React.useState('')
  const [error, setError] = React.useState(false)

  const handleChange = (e) => {
      if(e ==="" || /^[0-9\b]+$/.test(e)){
          if( e.length <= 5){
          setZip(e)
        }
      }
  }

  const handleSubmit = () => {
    if(zip.length === 5){
      setError(false)
      Cookies.set('zip', zip)
      window.location.href = "/loading";
    }else{
      setError(true)
    }
    console.log(zip)
  }

  return (
    <>
            <Flex
            direction={["column", "column", "column", "row", "row"]}
            >
                <Input
                isInvalid={error}
                value={zip}
                onChange={(e) => {handleChange(e.target.value)}}
                focusBorderColor={error ? "red.500" : "blue.500"}
                colorScheme="black"
                borderRadius="md"
                placeholder={error ? "Enter a valid zip code" : "Enter Zip Code"}
                size="lg"
                errorBorderColor='crimson'
                variant={error ? "filled" : "outline"}
                mb={["8px", "8px","8px", "0px", "0px"]}
                mr={["0px", "0px","0px", "3px", "3px"]}
                />
              <Button onClick={handleSubmit} colorScheme="orange" bgColor="#FF723B" px="40px" size="lg" variant="solid" borderRadius="md" >Check Availability</Button>
              </Flex>
    </>
  )}

  export default ZipForm