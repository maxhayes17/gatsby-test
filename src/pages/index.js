// Step 1: Import React
import * as React from 'react'
import '/src/pages/style.css'
import Layout from '../components/layout'
import { Button } from "@chakra-ui/react"
import '@fontsource/roboto'
import '@fontsource/ubuntu'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"

// Step 2: Define your component
const IndexPage = () => {
  return (

    <Layout pageTitle='Home Page'>
      <div style={{'display':'flex', 'justifyContent': 'center', 'alignItems': 'center'}}>  
      <Button 
      colorScheme="blackAlpha"
      variant="outline"
      color="white"
      border='2px'
      _hover={{color: 'white', opacity:"70%"}}
      onClick={() => alert("Pressed!")
      
    }
      >Button</Button>    
      </div>
    </Layout>

  )
}

// Step 3: Export your component
export default IndexPage
