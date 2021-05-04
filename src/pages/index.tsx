import type { NextPage } from 'next'
import Head              from 'next/head'

import { BiCake } from 'react-icons/all'
import {
   Box,
   Button,
}                 from 'chalkui/dist/cjs'

const IndexPage: NextPage = () => {
   return (
      <Box>
         <Head>
            <title>Chronicle</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Button>Bruh</Button>
      </Box>
   )
}

export default IndexPage
