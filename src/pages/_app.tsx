import React from 'react'
import type { AppProps } from 'next/app'
import '../assets/index.css'
import  { Sidebar }  from '../layouts/Sidebar'
import { StyledEngineProvider } from '@mui/styled-engine'
import { Provider } from 'react-redux'
import store from '../data/store'

function App ({Component, pageProps}: AppProps) {
  return (
    <div className="flex bg-[#E5E5E5]">
      <Provider store={store}>
          <Sidebar />
          <Component {...pageProps}/>
      </Provider>
    </div>
  )
}

export default App
