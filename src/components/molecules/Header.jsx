import { Box, Flex, Spacer } from '@chakra-ui/layout'
import React from 'react'
import EmailForm from '../atoms/EmailForm'
import LogoHeader from '../atoms/Logo'
import TelephoneHeader from '../atoms/TelephoneHeader'

const  Header = () => {
return (
<>
    <Box p="17px" border="1" bgColor="#fff" boxShadow="lg" align="center">
        <Flex maxW="1272px" justify="center">
        <LogoHeader />
        <Spacer />
        <EmailForm/>
        <Spacer />
        <TelephoneHeader />
        </Flex>
    </Box>
</>
)
}

export default Header
