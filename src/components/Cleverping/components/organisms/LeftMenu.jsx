import React from 'react'
import { Box, Flex, Text} from '@chakra-ui/layout'
import { Menu, MenuList, MenuItem, MenuButton } from '@chakra-ui/menu'
import { IconButton, Link } from '@chakra-ui/react'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { FaWifi, FaPhone, FaTv, FaLock, FaTools, FaMobileAlt } from 'react-icons/fa'

const LeftMenuCleverping = () => {

  const [isOpen, setIsOpen] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() =>{
      console.log('a')
      setIsOpen(false)
    }, 2500)
  },[])

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

return (
<>

<Box mt="22px" fontSize={{base:"3xl" ,md:"xl"}} p="3" color="#396AB3" align="center"  >
<Menu bgColor="none" isOpen={isOpen}>
  <Flex align="center" justify={{base:"center" ,md:"left"}}>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    fontWeight="bold"
    icon={isOpen ? <CloseIcon h="25%" w="25%"/> : <HamburgerIcon h="50%" w="50%"/>}
    variant='outline'
    size='lg'
    boxShadow="lg"
    rounded="full"
    h="55px"
    w="55px"
    bgColor="white"
    onClick={handleClick}
    boxShadow="lg"
  />
  <Text color="gray.500" lineHeight={6} fontSize="21px" fontWeight="700" pl="10px" align="left">Services<br/>& Tools</Text>
  </Flex>
  <MenuList bg="rgba(255, 255, 255, 0.5)" p="10px" rounded="40px" backdropFilter="blur(10px)" blur="10px" border="none">
    <Link href="/internet"><MenuItem fontWeight="bold" icon={<FaWifi size={26} />} rounded="full">Internet</MenuItem></Link>
    <Link href="/home-security"><MenuItem fontWeight="bold" icon={<FaLock size={26}/>}rounded="full">Home Security</MenuItem></Link>
    <Link href="/mobile"><MenuItem fontWeight="bold" icon={<FaMobileAlt size={26}/>} rounded="full">Mobile</MenuItem></Link>
    <Link href="/tv"><MenuItem fontWeight="bold" icon={<FaTv size={26}/>} rounded="full">TV</MenuItem></Link>
    <Link href="/phone"><MenuItem fontWeight="bold" icon={<FaPhone size={26}/>} rounded="full">Phone</MenuItem></Link>
    <Link href="/quizz"><MenuItem fontWeight="bold" icon={<FaTools size={26}/>} rounded="full">Tools</MenuItem></Link>
  </MenuList>
</Menu>
</Box>
</>
    )}


export default LeftMenuCleverping
