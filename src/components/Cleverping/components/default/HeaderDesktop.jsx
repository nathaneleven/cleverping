import { Box, Flex, Spacer } from '@chakra-ui/layout'
import React from 'react'
import ZipForm from '../atoms/ZipForm'
import LogoHeader from '../atoms/Logo'
import TelephoneHeader from '../atoms/TelephoneHeader'
import LeftMenu from '../organisms/LeftMenu'
import { 
    IconButton, 
    useMediaQuery, 
    Button, 
    useDisclosure, 
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Menu,
    MenuButton,
    MenuList,
    Link,
    MenuItem,
} from '@chakra-ui/react'
import { FaWifi, FaPhone, FaTv, FaLock, FaTools, FaMobileAlt } from 'react-icons/fa'

import { HamburgerIcon } from '@chakra-ui/icons'

const  HeaderDesktop = () => {
    const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)')
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

return (
<>
    <Flex p="17px" zIndex="1000" border="1" h={[16,16,16,16, 24]} direction="column" position="fixed" w="100%" bgColor="#fff" boxShadow="lg" align="center">
        <Flex justify={["space-between","space-between","space-between", "space-around", "space-around"]} alignItems="center" h="100%" w="100%" alignSelf="center">
        
        {isLargerThan1280 &&
        <>
            <LogoHeader />
            <ZipForm/>
            <TelephoneHeader />
        </>
        }
        {!isLargerThan1280 &&
        <>
            <Button
            as={IconButton}
            icon={<HamburgerIcon h="25px" width="25px"/>}
            h="40px"
            w="40px"
            variant="outline"
            bgColor="white"
            border="none"
            color="black"
            ref={btnRef} 
            onClick={onOpen}
            />
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                <DrawerCloseButton />
                <Menu bgColor="none" isOpen={isOpen}>            
                <MenuList bg="rgba(255, 255, 255, 0.5)" p="10px" rounded="40px" backdropFilter="blur(10px)" blur="10px" border="none">
                    <Link href="/internet"><MenuItem fontWeight="bold" icon={<FaWifi size={26} />} rounded="full">Internet</MenuItem></Link>
                    <Link href="/home-security"><MenuItem fontWeight="bold" icon={<FaLock size={26}/>}rounded="full">Home Security</MenuItem></Link>
                    <Link href="/mobile"><MenuItem fontWeight="bold" icon={<FaMobileAlt size={26}/>} rounded="full">Mobile</MenuItem></Link>
                    <Link href="/tv"><MenuItem fontWeight="bold" icon={<FaTv size={26}/>} rounded="full">TV</MenuItem></Link>
                    <Link href="/phone"><MenuItem fontWeight="bold" icon={<FaPhone size={26}/>} rounded="full">Phone</MenuItem></Link>
                    <Link href="/quizz"><MenuItem fontWeight="bold" icon={<FaTools size={26}/>} rounded="full">Tools</MenuItem></Link>
                </MenuList>
                </Menu>
                </DrawerContent>
            </Drawer>
                    <LogoHeader />
                    <TelephoneHeader />
        </>
        }
        
        </Flex>
        <Box width="100%">
        {isLargerThan1280 ? <LeftMenu /> : null}
        </Box>
    </Flex>

</>
)
}

export default HeaderDesktop;