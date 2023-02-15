import React from 'react'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import '../assets/global.scss'
import '../assets/index.css'
import 'react-toastify/dist/ReactToastify.css'
import store from '../data/store'
import { Navbar } from '../layouts/Navbar'
import Footer from '../layouts/Footer/Footer'

const MyApp = ({ Component, pageProps}:AppProps) => {
  return (
  <Provider store={store}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>BBturn</title>
      </Head>
      <div className='theme-1'>
        <ToastContainer />
        <Navbar title="Template"/>
        <hr />
        <div className='container-fluid'>
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </Provider>
  )
}

export default MyApp
