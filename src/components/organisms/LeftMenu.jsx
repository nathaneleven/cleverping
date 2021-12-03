import React from 'react'
import { Box, Flex, Text} from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { Menu, MenuList, MenuItem, MenuButton } from '@chakra-ui/menu'
import { Image } from '@chakra-ui/image'

const LeftMenu = () => {
    return (
<>

<Box position="fixed" p="3" color="#396AB3" align="center"  >
<Menu bgColor="none">
  <Flex alignItems="center">
  <MenuButton p="20px" w="80px" h="80px" rounded="full" as={Button}>
    <Image src="/services-tools-icon.svg" />
  </MenuButton>
  <Text color="#a5a5a5" fontWeight="700" pl="10px" align="left">Services<br/>& Tools</Text>
  </Flex>
  <MenuList bg="rgba(255, 255, 255, 0.5)" p="10px" rounded="40px" backdropFilter="blur(10px)" blur="10px" border="none">
    <MenuItem rounded="full"><Flex h="41px" w="41px" justifyContent="center" pr="15px"><Image alignSelf="center" maxH="33px" src="/internet-icon.svg" /></Flex>Internet</MenuItem>
    <MenuItem rounded="full"><Flex h="41px" w="41px" justifyContent="center" pr="15px"><Image alignSelf="center" maxH="33px" src="/home-security-icon.svg" /></Flex>Home Security</MenuItem>
    <MenuItem rounded="full"><Flex h="41px" w="41px" justifyContent="center" pr="15px"><Image alignSelf="center" maxH="33px" src="/mobile-icon.svg" /></Flex>Mobile</MenuItem>
    <MenuItem rounded="full"><Flex h="41px" w="41px" justifyContent="center" pr="15px"><Image alignSelf="center" maxH="33px" src="/tv-icon.svg" /></Flex>TV</MenuItem>
    <MenuItem rounded="full"><Flex h="41px" w="41px" justifyContent="center" pr="15px"><Image alignSelf="center" maxH="33px" src="/phone-icon.svg" /></Flex>Phone</MenuItem>
    <MenuItem rounded="full"><Flex h="41px" w="41px" justifyContent="center" pr="15px"><Image alignSelf="center" maxH="33px" src="/tools-icon.svg" /></Flex>Tools</MenuItem>
  </MenuList>
  
</Menu>
</Box>
</>
    )}


export default LeftMenu
