import React from 'react'
import type { AppProps } from 'next/app'
import '../assets/global.scss'
import '../assets/index.css'
import 'react-toastify/dist/ReactToastify.css'
import Footer from '../layouts/Footer/Footer'
import  { Sidebar }  from '../layouts/Sidebar'
import { StyledEngineProvider } from '@mui/styled-engine'

export interface IApplicationProps {}

function App ({Component, pageProps}: AppProps) {
  return (
    <div className="flex bg-[#E5E5E5]">
        <StyledEngineProvider injectFirst>
          <Sidebar />
          <Component {...pageProps}/>
        </StyledEngineProvider>
    </div>
  )
}

export default App
