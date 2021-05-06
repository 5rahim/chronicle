import { useRouter }           from 'next/router'
import NextLink, { LinkProps } from 'next/link'
import React, {
   cloneElement,
   forwardRef,
} from 'react'
import { useColorMode }        from 'chalkui/dist/cjs/ColorMode'
import { Box }                 from 'chalkui/dist/cjs/Components/Layout'

type NavLinkProps = LinkProps & {
   children?: React.ReactNode
}

const NavLink: React.FC<NavLinkProps> = ({ children, ...props }: NavLinkProps) => {
   const router = useRouter()
   let isActive = false
   
   if (router.pathname === props.href) {
      isActive = true
   }
   
   return (
      <NextLink passHref {...props}>
         {typeof children === 'function' ? children(isActive) : children}
      </NextLink>
   )
}

export const stringToUrl = (str: string, path = '/') => {
   return `${path}${str
      .toLowerCase()
      .split(' ')
      .join('-')}`
}

export const SideNavLink = forwardRef(({ children, icon, ...props }: any, ref) => {
   const { colorMode } = useColorMode()
   return (
      <Box
         ref={ref}
         as="a"
         display="flex"
         cursor="pointer"
         align="center"
         px="2"
         py="1"
         transition="all 0.2s"
         fontWeight="500"
         fontSize='1rem'
         outline="none"
         _focus={{ shadow: 'outline' }}
         color='whiteAlpha.500'
         _notFirst={{ mt: 1 }}
         {...props}
      >
         {icon && <span style={{ fontSize: '1.3rem' }}>{cloneElement(icon, { mr: 2 })}</span>}
         <Box>{children}</Box>
      </Box>
   )
})

export const TopNavLink = forwardRef(({ href, ...props }: any, ref) => {
   return (
      <NavLink href={href}>
         {(isActive: boolean) => (
            <SideNavLink
               ref={ref}
               aria-current={isActive ? 'page' : undefined}
               _hover={{ color: !isActive ? 'inherit' : null }}
               {...(isActive && { color: 'teal.500', fontWeight: 'semibold' })}
               {...props}
            />
         )}
      </NavLink>
   )
})

export const ComponentLink = forwardRef(({ href, ...props }: any, ref) => {
   const { colorMode } = useColorMode()
   
   return (
      <NavLink href={href}>
         {(isActive: any) => (
            <SideNavLink
               ref={ref}
               aria-current={isActive ? 'page' : undefined}
               _hover={{
                  color: 'whiteAlpha.900',
                  transform: 'translateX(2px)',
               }}
               {...(isActive && {
                  bg: 'gray.700',
                  rounded: 'sm',
                  borderRadius: 4,
                  color: 'white',
                  _hover: {},
               })}
               {...props}
            />
         )}
      </NavLink>
   )
})
