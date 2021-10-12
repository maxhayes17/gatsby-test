import * as React from 'react'
import '/src/pages/style.css'
import '@fontsource/roboto'
import '@fontsource/ubuntu'

import { Link } from 'gatsby'
import { Button, ButtonGroup } from "@chakra-ui/react"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import { Stack, HStack, VStack } from "@chakra-ui/react"
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { Box } from "@chakra-ui/react"



const AboutMe = () => {

return(
<div style={{textAlign:"center", maxWidth:"100ex"}}>
    <Box>
        <h1 class="h1">About me</h1>
        <p class="p">
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
        <h3 class="h3" style={{marginTop:"25px"}}>Connect with me!</h3>
        <HStack spacing={10} marginTop="5px" direction="row">
            <a href="mailto:mch103@pitt.edu"><FaEnvelope color="white" size="4ex"/></a>
            <a href="http://linkedin.com/in/~max"><FaLinkedin color="white" size="4ex"/></a>
            <a href="http://github.com/maxhayes17"><FaGithub color="white" size="4ex"/></a>
        </HStack>
    </Box>

</div>
)


}
export default AboutMe