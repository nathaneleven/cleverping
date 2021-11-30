import React from 'react'
import { Box, Flex, Link, Spacer, Text } from '@chakra-ui/layout'
import EmailForm from '../atoms/EmailForm'

const  Footer = () => {
    return (
    <>
        <Box border="1" fontWeight="700" bgColor="#000" color="#fff" align="center">
            <Flex p={{base:"8", xl:"50px 0"}} maxW="1272px" align="center" direction={{base: "column", md: "row"}} >
                <Box>
                    <svg xmlns="http://www.w3.org/2000/svg" width="117" height="117" viewBox="0 0 117 117"><g id="email-centurylink" transform="translate(-0.5 -1.049)"><g id="Group_2129" data-name="Group 2129" transform="translate(0.499 0.587)"><path id="Subtraction_1" data-name="Subtraction 1" d="M58.5,117A58.515,58.515,0,0,1,35.729,4.6,58.515,58.515,0,0,1,81.271,112.4,58.132,58.132,0,0,1,58.5,117ZM52.109,61.213a.85.85,0,0,0-.458.164c-7.636,4.846-15.13,9.6-22.868,14.461a.678.678,0,0,0-.316.956,3.784,3.784,0,0,0,3.792,2.564l26.252,0,26.013,0h.208c.188,0,.408,0,.622-.017a3.783,3.783,0,0,0,3.275-2.683.566.566,0,0,0-.282-.758c-8.33-5.258-15.859-10.021-23.018-14.563a.611.611,0,0,0-.782.01c-.561.377-1.136.754-1.691,1.118l-.145.095-.042.027c-.894.585-1.815,1.19-2.706,1.807a2.508,2.508,0,0,1-1.433.507,2.548,2.548,0,0,1-1.458-.521c-.859-.6-1.758-1.184-2.551-1.7-.692-.453-1.316-.863-1.936-1.282A.843.843,0,0,0,52.109,61.213Zm36.7-15.845h0l-20.4,13.444,20.4,12.9V45.369Zm-60.626-.024h0v26.31l.078-.033.063-.025a2.15,2.15,0,0,0,.327-.153q9.759-6.168,19.512-12.335c.082-.054.157-.11.245-.175l.044-.033c.047-.035.1-.073.153-.112L28.188,45.345Zm4.123-7.7c-.138,0-.28,0-.416.007a3.676,3.676,0,0,0-3.558,3.221l.072.052c.1.078.224.167.347.247L33.4,44.226c8.364,5.511,16.545,10.9,24.664,16.263a.838.838,0,0,0,.463.17.862.862,0,0,0,.47-.177C68.96,53.9,78.773,47.438,88.164,41.278a.83.83,0,0,0,.384-1.187,3.785,3.785,0,0,0-3.81-2.449Z" transform="translate(0.001 0.461)" fill="#fff"/></g></g></svg>
                </Box>
                <Box p="3">
                    <Text align={{base:"center", md:"start"}} fontSize="2xl">
                        Subscribe to our weekly specials for internet news and promos
                    </Text>
                </Box>
                <Spacer/>
                <EmailForm/>
            </Flex>
            <Box p="8" bgColor="#222" color="#fff" align="center"  >
                <Flex maxW="1272px" align="center" direction={{base: "column", md: "row"}} >
                    <Box pb={{base:5, md:0}}>
                        <Text fontSize="2xl" >
                        Call Now To Speak With One Of Our Experts
                        </Text>
                    </Box>
                    <Spacer/>
                    <Flex align="center">
                        <Link href="tel:+18339803434" fontSize="2xl" >
                        1 (833) 980-3434
                        </Link>
                    </Flex>
                </Flex>
            </Box>
            <Box p="3" bgColor="#000" color="white" align="center"  >
            <Link href="tel:+18339803434"><Text fontSize="xl" >Call 1 (833) 980-3434 to Order Now</Text></Link>
            </Box>
        </Box>
    </>
)}
export default Footer