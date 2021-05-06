import { extendedTheme } from 'chalkui/dist/cjs'
// import { createBreakpoints } from 'chalkui/chalk/Theme/Tools'

// const fonts = { mono: `'Menlo', monospace` }

// const breakpoints = createBreakpoints({
//    sm: '40em',
//    md: '52em',
//    lg: '64em',
//    xl: '80em',
// })

const theme = extendedTheme({
   colors: {
      black: '#16161D',
      gray: {
         100: '#f9f9f9'
      }
   },
   // fonts,
   // breakpoints,
})

export default theme
