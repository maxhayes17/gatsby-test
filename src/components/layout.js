import * as React from 'react'
import '/src/pages/style.css'
import '@fontsource/roboto'
import '@fontsource/ubuntu'
import { Link } from 'gatsby'
import { Button, ButtonGroup } from "@chakra-ui/react"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import { Stack, HStack, VStack } from "@chakra-ui/react"
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Layout = ({ pageTitle, children }) => {

  return (
    <div style={{backgroundColor: "#121212", margin:"auto"}}>
      <title>{pageTitle}</title>
      <main>
          <div class="nav">
        <ButtonGroup spacing="3" variant="none" bg='#121212'>
            <Button leftIcon={<FaLinkedin color="white" size="4ex"/>} href="www.linkedin.com/in/~max"/>
            <Button leftIcon={<FaGithub color="white" size="4ex"/>} />
        </ButtonGroup>
        </div>
        <div class="comein">
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"10%"}}>
                <ul>
                    <li>
                    <p class='pulsing-text'>Max Hayes</p>
                    </li>
                    <li style={{marginTop:"10px"}}>
                    <Tabs variant="soft-rounded" colorScheme="whiteAlpha" defaultIndex={0} isManual>
                        <TabList>
                            <Tab color="white"      _selected={{ color: "#ffd633", bg: "#202020" }}>Home</Tab>
                            <Tab color="yellow.100" _selected={{ color: "#ffd633", bg: "#202020" }}>About Me</Tab>
                            <Tab color="yellow.100" _selected={{ color: "#ffd633", bg: "#202020" }}>Projects</Tab>
                            <Tab color="yellow.100" _selected={{ color: "#ffd633", bg: "#202020" }}>Resume</Tab>
                        </TabList>
                        <TabPanels textAlign="center">
                            <TabPanel><p></p></TabPanel>
                            <TabPanel><p>About me</p></TabPanel>
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