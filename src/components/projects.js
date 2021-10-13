import * as React from 'react'
import '/src/pages/style.css'
import '@fontsource/roboto'
import '@fontsource/ubuntu'

import AboutMe from '../components/aboutme'
import {HStack, Flex, Spacer, 
    Tabs, TabList, TabPanels, Tab, TabPanel, 
    Button, ButtonGroup, Wrap, WrapItem, Center } from "@chakra-ui/react"
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Projects = ({ pageTitle, children }) => {

  return (
    <Center>
        <Wrap spacing={5} maxWidth="100ex" marginTop="40px">
            <WrapItem>
                <Center className="projectcard">
                    <p>hello</p>
                </Center>
            </WrapItem>
            <WrapItem>
                <Center className="projectcard">
                    <p>hello</p>
                </Center>
            </WrapItem>
            <WrapItem>
                <Center className="projectcard">
                    <p>hello</p>
                </Center>
            </WrapItem>
        </Wrap>
    </Center>
  )
}

export default Projects