import type { NextPage } from 'next'
import Head              from 'next/head'

import { Button }            from 'chalkui/dist/cjs/Components/Button'
import {
   Box,
}                            from 'chalkui/dist/cjs/Components/Layout'
import withApollo            from '../graphql/withApollo'
import { useCharacters }     from '../graphql/queries/characters/hooks'
import Layout                from '../components/Layout'
import { useColorModeValue } from 'chalkui/dist/cjs'

const IndexPage: NextPage = () => {
   
   const { data, loading, error } = useCharacters()
   
   return (
      <Layout width="full" maxWidth="1280px" mx="auto">
         <Head>
            <title>Chronicle</title>
         </Head>
         
         <Box
            bg={useColorModeValue('white', 'gray.800')}
            height='200px'
         >
         
         </Box>
         
         {/*<Box>*/}
         {/*   <div>*/}
         {/*   </div>*/}
         {/*   <Button>Bruh</Button>*/}
         {/*   {loading ? (*/}
         {/*      <Box>Loading...</Box>*/}
         {/*   ) : (*/}
         {/*      <>*/}
         {/*         {data.characters ? (*/}
         {/*            data.characters.map((character: any) => <Box key={character.id}>{character.name}</Box>)*/}
         {/*         ) : (*/}
         {/*            <Box>Empty</Box>*/}
         {/*         )}*/}
         {/*      </>*/}
         {/*   )}*/}
         {/*   {error && <Box>{error}</Box>}*/}
         {/*</Box>*/}
      </Layout>
   )
}

export default withApollo({ ssr: true })(IndexPage)
