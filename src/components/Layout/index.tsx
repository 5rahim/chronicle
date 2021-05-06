import React            from 'react'
import {
   Box,
   BoxProps,
}                       from 'chalkui/dist/cjs/Components/Layout'
import { useColorMode } from 'chalkui/dist/cjs/ColorMode'
import { SideNav }      from './SideNav'
import { Header }       from './Header'

interface LayoutOptions {
   children?: React.ReactNode
}

type LayoutProps = LayoutOptions & BoxProps


const Layout: React.FC<LayoutProps> = ({ children, ...rest }: LayoutProps) => {
   const { colorMode } = useColorMode()
   
   return (
      <>
         <Header />
         <Box>
            <SideNav display={['none', null, 'block']} maxWidth="14rem" width="full" />
            <Box pl={[0, null, '14rem']} mt="4rem">
               <Box
                  as="section"
                  backgroundColor={colorMode === 'light' ? 'gray.100' : 'gray.900'}
                  minHeight="calc(100vh - 4rem)"
               >
                  <Box {...rest}>
                     {children}
                  </Box>
               </Box>
            </Box>
         </Box>
      </>
   )
}

export default Layout
