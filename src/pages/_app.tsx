import React from 'react'
import type { AppProps } from 'next/app'
import '../assets/global.scss'
import '../assets/index.css'
import 'react-toastify/dist/ReactToastify.css'
import store from '../data/store'
import { Navbar } from '../layouts/Navbar'
import Footer from '../layouts/Footer/Footer'
import  { Sidebar }  from '../layouts/Sidebar'

export interface IApplicationProps {}

function App ({Component, pageProps}: AppProps) {
  return (
    <div className="flex flex-row bg-[#E5E5E5]">
      <Sidebar />
      <div className="">
        <div className=''>
        <div className="w-screen h-[70px] bg-ligth-white"/>
          <Component {...pageProps}/>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
