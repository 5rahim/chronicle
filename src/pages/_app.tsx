import NProgress from "nprogress"
import Router    from "next/router"
import "nprogress/nprogress.css"

import { Provider }      from 'react-redux'
import type { AppProps } from 'next/app'

import store             from '../store'
import {
   ChalkProvider,
} from 'chalkui/dist/cjs/React'
import theme             from '../theme'


Router.events.on("routeChangeStart", () => {
   NProgress.start()
})
Router.events.on("routeChangeComplete", () => NProgress.done())
Router.events.on("routeChangeError", () => NProgress.done())

export default ({ Component, pageProps }: AppProps) => {
   return (
      <Provider store={store}>
         <ChalkProvider resetCSS theme={theme}>
            <Component {...pageProps} />
         </ChalkProvider>
      </Provider>
   )
}
