import * as React from 'react'
import '/src/pages/style.css'
import '@fontsource/roboto'
import '@fontsource/ubuntu'

import AboutMe from '../components/aboutme'
import {HStack, Flex, Spacer, VStack, Image, Heading, Code, Badge,
    Tabs, TabList, TabPanels, Tab, TabPanel, 
    Button, ButtonGroup, Wrap, WrapItem, Center } from "@chakra-ui/react"
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import TestIcon from '../images/testicon6.png'
import WWIcon from '../images/ios-marketing.png'
const Projects = ({ pageTitle, children }) => {

/*./images/testicon6.png */    
  return (
    <Center>
        <Wrap spacing={10} maxWidth="100ex" marginTop="40px" className="cardwrap">
            <WrapItem>
                <Center className="projectcard" as="button">
                    <VStack>
                    <Heading className="projectcardtitle" fontSize="25px">Spotify CD Player</Heading>
                    <Image src={TestIcon} alt="Spotify CD Player" boxSize="175px"/>
                    <Wrap>
                        <WrapItem>
                            <Badge colorScheme="orange">React</Badge>
                        </WrapItem>
                        <WrapItem>
                            <Badge colorScheme="orange">Spotify API</Badge>
                        </WrapItem>
                    </Wrap>
                    </VStack>
                </Center>
            </WrapItem>

            <WrapItem>
                <Center className="projectcard">
                <VStack>
                    <Heading className="projectcardtitle" fontSize="25px">Water Watcher</Heading>
                    <Image src={WWIcon} alt="Water Watcher" boxSize="175px" borderRadius="10%"/>
                    <Wrap>
                        <WrapItem>
                            <Badge colorScheme="orange">Swift</Badge>
                        </WrapItem>
                    </Wrap>
                </VStack>

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