import * as React from 'react'
import '/src/pages/style.css'
import '@fontsource/roboto'
import '@fontsource/ubuntu'

import AboutMe from '../components/aboutme'
import {HStack, Flex, Spacer, VStack, Image, Heading, Code,
    Tabs, TabList, TabPanels, Tab, TabPanel, 
    Button, ButtonGroup, Wrap, WrapItem, Center } from "@chakra-ui/react"
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import TestIcon from '../images/testicon6.png'
const Projects = ({ pageTitle, children }) => {

/*./images/testicon6.png */    
  return (
    <Center>
        <Wrap spacing={5} maxWidth="100ex" marginTop="40px">
            <WrapItem>
                <Center className="projectcard">
                    <VStack>
                    <Heading className="projectcardtitle">Spotify CD Player</Heading>
                    <Image src={TestIcon} alt="Spotify CD Player" boxSize="175px"/>
                    <Code colorScheme="orange" marginTop="30px">React, Spotify API</Code>
                    
                    </VStack>
                </Center>
            </WrapItem>
            <WrapItem>
                <Center className="projectcard">

                </Center>
            </WrapItem>
            <WrapItem>
                <Center className="projectcard">

                </Center>
            </WrapItem>
        </Wrap>
    </Center>
  )
}

export default Projects