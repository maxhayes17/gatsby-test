import * as React from 'react'
import '/src/pages/style.css'
import '@fontsource/roboto'
import '@fontsource/ubuntu'
import {HStack, Flex, Spacer, StackDivider, Box, Center} from "@chakra-ui/react"

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'


const AboutMe = () => {

return(
<Center maxWidth="100ex">
    <Box>
        <h1 className="title">About me</h1>
        <p className="aboutmetext">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Vivamus aliquam arcu at orci luctus accumsan.
        Quisque iaculis arcu sit amet elit facilisis, id cursus augue elementum. 
        Sed vitae blandit leo. Suspendisse ut neque semper, lobortis justo vel, convallis lectus. 
        Duis suscipit condimentum urna, et blandit mi suscipit dapibus. 
        Proin dignissim urna mattis velit tristique convallis. 
        Praesent ut pellentesque diam, ac mattis sem. 
        Mauris ante velit, tristique ut enim vitae, tincidunt tristique tellus. 
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
        In hac habitasse platea dictumst. 
        In elit dui, facilisis non ultrices eu, sagittis eu mauris. 
        Ut eget mi vitae purus mattis maximus. Nulla at velit est. 
        Vivamus rhoncus eleifend dui, vel faucibus ligula ultricies at. 
        Praesent facilisis dapibus velit eget condimentum. 
        Quisque eget finibus quam, quis scelerisque ex.
        </p>
        <h3 className="connectwithme" style={{marginTop:"40px"}}>Connect with me!</h3>
        <Center marginTop="10px">
            <HStack spacing={5} marginTop="10px" direction="row"
                divider={<StackDivider borderColor="gray.200" align="stretch" />}>
                <a href="mailto:mch103@pitt.edu"><FaEnvelope color="white" size="4ex"/></a>
                <a href="http://linkedin.com/in/~max"><FaLinkedin color="white" size="4ex"/></a>
                <a href="http://github.com/maxhayes17"><FaGithub color="white" size="4ex"/></a>
            </HStack>
        </Center >
    </Box>
</Center>
)


}
export default AboutMe