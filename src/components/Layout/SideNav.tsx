import { useColorMode }  from 'chalkui/dist/cjs/ColorMode'
import {
   Box,
   BoxProps,
   Flex,
   Stack,
}                        from 'chalkui/dist/cjs/Components/Layout'
import { Text }          from 'chalkui/dist/cjs'
import { ComponentLink } from './NavLink'
import {
   BiCollection,
   BiDirections,
   BiFingerprint,
   BiGlasses,
   BiHome,
   BiMap,
   BiPen,
   BiSun,
   BiWinkSmile,
} from 'react-icons/bi'

const SideNavLink = ({ href, children, icon }: any) => (
   <ComponentLink href={href}>
      <Flex align="center" p={1}>
         <Box fontSize="1.2rem">
            <Box as={icon} mr={3} w="24px" />
         </Box>
         <Text>{children}</Text>
      </Flex>
   </ComponentLink>
)

const PageLinks = () => (
   <Stack spacing={0} mb={8}>
      <SideNavLink href="/" icon={BiHome}>
         {'Home'}
      </SideNavLink>
      <SideNavLink href="/characters" icon={BiWinkSmile}>
         {'Characters'}
      </SideNavLink>
      <SideNavLink href="/stories" icon={BiPen}>
         {'Stories'}
      </SideNavLink>
      <SideNavLink href="/traits" icon={BiFingerprint}>
         {'Traits'}
      </SideNavLink>
      <SideNavLink href="/places" icon={BiSun}>
         {'Places'}
      </SideNavLink>
      <SideNavLink href="/seasons" icon={BiDirections}>
         {'Seasons'}
      </SideNavLink>
      <SideNavLink href="/episodes" icon={BiCollection}>
         {'Episodes'}
      </SideNavLink>
   </Stack>
)

type SideNavProps = BoxProps

export const SideNav = (props: SideNavProps) => {
   const { colorMode } = useColorMode()
   
   return (
      <Box
         backgroundColor={colorMode === 'light' ? 'gray.800' : 'gray.800'}
         position="fixed"
         left="0"
         width="100%"
         height="100%"
         top="0"
         right="0"
         {...props}
      >
         <Box top="4rem" position="relative" overflowY="auto" borderRightWidth="1px">
            <Box>
               <Flex justify="space-between" direction="column" height="calc(100vh - 4rem)" fontSize="sm" p="6">
                  <PageLinks/>
               </Flex>
            </Box>
         </Box>
      </Box>
   )
}
