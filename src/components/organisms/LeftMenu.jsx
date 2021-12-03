import React from 'react'
import { Box} from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { Menu, MenuList, MenuItem, MenuButton } from '@chakra-ui/menu'
import { Image } from '@chakra-ui/image'

const LeftMenu = () => {
    return (
<>

<Box position="fixed" p="10" bgColor="#396AB3" color="#396AB3" align="center"  >
<Menu>
  <MenuButton p="20px" w="80px" h="80px" rounded="full" as={Button}>
    <Image src="/services-tools-icon.svg" />
  </MenuButton>
  <MenuList>
    <MenuItem><Box><Image src="/internet-icon.svg" /></Box>Internet</MenuItem>
    <MenuItem><Box><Image src="/home-security-icon.svg" /></Box>Home Security</MenuItem>
    <MenuItem><Box><Image src="/mobile-icon.svg" /></Box>Mobile</MenuItem>
    <MenuItem><Box><Image src="/tv-icon.svg" /></Box>TV</MenuItem>
    <MenuItem><Box><Image src="/phone-icon.svg" /></Box>Phone</MenuItem>
    <MenuItem><Box><Image src="/tools-icon.svg" /></Box>Tools</MenuItem>
  </MenuList>
</Menu>
</Box>
</>
    )}


export default LeftMenu
