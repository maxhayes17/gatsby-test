import * as React from 'react'
import '/src/pages/style.css'
import '@fontsource/roboto'
import '@fontsource/ubuntu'

import AboutMe from '../components/aboutme'
import { Link } from 'gatsby'
import { Button, ButtonGroup } from "@chakra-ui/react"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import { Stack, HStack, VStack, Flex, Spacer } from "@chakra-ui/react"
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Layout = ({ pageTitle, children }) => {

  return (
    <div style={{backgroundColor: "#121212", margin:"auto"}}>
      <title>{pageTitle}</title>
      <main>
          <div class="nav">
              <Flex>
                <Spacer />
                <HStack spacing={15} align="flex-end">
                    <a href="http://linkedin.com/in/~max"><FaLinkedin color="white" size="4ex"/></a>
                    <a href="http://github.com/maxhayes17"><FaGithub color="white" size="4ex"/></a>
                </HStack>
              </Flex>
        </div>
        <div class="comein">
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"10%"}}>
                <ul>
                    <li>
                    <p class='pulsing-text'>Max Hayes</p>
                    </li>
                    <li style={{marginTop:"10px"}}>
                    <Tabs variant="soft-rounded" colorScheme="whiteAlpha" defaultIndex={0} align="center">
                        <TabList>
                            <Tab color="white"      _selected={{ color: "#ffd633", bg: "#3A3B3C" }}>Home</Tab>
                            <Tab color="yellow.100" _selected={{ color: "#ffd633", bg: "#3A3B3C" }}>About Me</Tab>
                            <Tab color="yellow.100" _selected={{ color: "#ffd633", bg: "#3A3B3C" }}>Projects</Tab>
                            <Tab color="yellow.100" _selected={{ color: "#ffd633", bg: "#3A3B3C" }}>Resume</Tab>
                        </TabList>
                        <TabPanels textAlign="center">
                            <TabPanel><p></p></TabPanel>
                            <TabPanel class="center"><AboutMe /></TabPanel>
                            <TabPanel><p>Projects</p></TabPanel>
                            <TabPanel><p>View my Resume <a href="#" style={{color:"#ffd633"}}>here</a></p></TabPanel>
                        </TabPanels>
                    </Tabs>
                    </li>
                </ul>
            </div>
        </div>
        {children}
      </main>
    </div>

  )
}

export default Layout

/*
                <li>
                <Link to="/" class="pageTitle">Home</Link>
                </li>
                <li>
                <Link to="/page2" class="pageTitle">Page2</Link>
                </li>



                <h1 style={{display:'flex', justifyContent:'center', alignItems:'center', color:'white'}}>{pageTitle}</h1>




*/