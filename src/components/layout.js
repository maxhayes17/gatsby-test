import * as React from 'react'
import '/src/pages/style.css'
import '@fontsource/roboto'
import '@fontsource/ubuntu'

import AboutMe from '../components/aboutme'
import {HStack, Flex, Spacer, 
    Tabs, TabList, TabPanels, Tab, TabPanel, 
    Button, ButtonGroup } from "@chakra-ui/react"
import { FaGithub, FaLinkedin, } from 'react-icons/fa'

const Layout = ({ pageTitle, children }) => {

  return (
    <div style={{backgroundColor: "#121212", margin:"auto"}}>
      <title>{pageTitle}</title>
      <main>
          <div className="nav">
              <Flex>
                <Spacer />
                <HStack spacing={15} align="flex-end">
                    <a href="http://linkedin.com/in/~max"><FaLinkedin color="white" size="4ex"/></a>
                    <a href="http://github.com/maxhayes17"><FaGithub color="white" size="4ex"/></a>
                </HStack>
              </Flex>
        </div>
        <div className="comein">
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"10%"}}>
                <ul>
                    <li>
                    <p className='pulsing-text'>Max Hayes</p>
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
                            <TabPanel className="center"><AboutMe /></TabPanel>
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