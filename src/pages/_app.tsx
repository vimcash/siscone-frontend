import React from 'react'
import type { AppProps } from 'next/app'
import '../assets/global.scss'
import '../assets/index.css'
import 'react-toastify/dist/ReactToastify.css'
import Footer from '../layouts/Footer/Footer'
import  { Sidebar }  from '../layouts/Sidebar'
import { StyledEngineProvider } from '@mui/styled-engine'
import { Provider } from 'react-redux'
import store from '../data/store'
import { ToastContainer } from 'react-toastify'

function App ({Component, pageProps}: AppProps) {
  return (
    <div className="flex bg-[#E5E5E5]">
      <Provider store={store}>
        <ToastContainer />
        <StyledEngineProvider injectFirst>
          <Sidebar />
          <Component {...pageProps}/>
        </StyledEngineProvider>
      </Provider>
    </div>
  )
}

export default App
