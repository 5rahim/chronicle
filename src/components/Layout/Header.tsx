import React            from 'react'
import {
   Box,
   Flex,
}                       from 'chalkui/dist/cjs/Components/Layout'
import {
   IconButton,
   Text,
}                       from 'chalkui/dist/cjs'
import { useColorMode } from 'chalkui/dist/cjs/ColorMode'
import {
   BiMoon,
   BiSun,
} from 'react-icons/bi'

interface HeaderProps {
}

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
   const { ...rest } = props
   const {colorMode, toggleColorMode} = useColorMode();
   const bg = {light: 'white', dark: 'gray.800'};
   
   return (
      <Box
         pos="fixed"
         as="header"
         top="0"
         zIndex="4"
         bg={bg[colorMode]}
         left="0"
         right="0"
         borderBottomWidth="1px"
         width="full"
         height="4rem"
         {...rest}
      >
         <Flex width="100%" mx="auto" px={6} pr={[1, 6]} height="100%" alignItems={"center"}>
            
            <Flex width="100%" align="center" justify="space-between">
               <Box as="a" d="block" href="/">
                  <Text fontWeight={"bolder"} fontSize="1.2rem" color="primary">Storylab</Text>
               </Box>
            
               <Flex align="center" color="gray.500">
                  <IconButton
                     aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
                     variant="ghost"
                     colorScheme={'gray.100'}
                     color="current"
                     ml="2"
                     fontSize="20px"
                     onClick={toggleColorMode}
                     icon={colorMode === 'light' ? <BiMoon/> : <BiSun/>}
                  />
               </Flex>
            </Flex>
         </Flex>
      </Box>
   )
   
}
