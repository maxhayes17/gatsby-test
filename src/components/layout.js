import * as React from 'react'
import '/src/pages/style.css'
import '@fontsource/roboto'
import '@fontsource/ubuntu'
import { Link } from 'gatsby'
import { Button } from "@chakra-ui/react"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

const Layout = ({ pageTitle, children }) => {

  return (
    <div style={{backgroundColor: "black", margin:"auto"}}>
      <title>{pageTitle}</title>
      <main>
        <div style={{marginTop:"40px", marginLeft:"20px"}}>
            <ul>
                <li>
                <p class='pulsing-text'>Max Hayes</p>
                </li>
                <li style={{marginTop:"10px"}}>
                <Tabs variant="soft-rounded" colorScheme="whiteAlpha">
                    <TabList>
                        <Tab color="yellow.100" _selected={{ color: "white", bg: "#121212" }}>Home</Tab>
                        <Tab color="yellow.100" _selected={{ color: "white", bg: "#121212" }}>About Me</Tab>
                        <Tab color="yellow.100" _selected={{ color: "white", bg: "#121212", boxShadow:"xl" }}>Projects</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel><p>Home</p></TabPanel>
                        <TabPanel><p>About me</p></TabPanel>
                        <TabPanel><p>Here are some of my projects</p></TabPanel>
                    </TabPanels>
                </Tabs>
                </li>
            </ul>
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