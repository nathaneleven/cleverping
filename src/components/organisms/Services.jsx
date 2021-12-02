import React from 'react'
import { Box, Heading } from '@chakra-ui/layout'
import InternetService from '../atoms/InternetService'
import VideoService from '../atoms/VideoService'
import PhoneService from '../atoms/PhoneService'
import MobileService from '../atoms/MobileService'

const Services = () => {
    return (
        <>
        <Box w="100%" align="center">
        <Heading align="center" py="40px">
        All The Services You Need In One Place
        </Heading>
        <InternetService/>
        <VideoService/>
        <PhoneService/>
        <MobileService/>
        </Box>
        </>
    )}

export default Services