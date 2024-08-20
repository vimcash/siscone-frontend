'use client'
import React from 'react'
import { PropInterface } from './interfaces'

const LeftMenu = ({children}:PropInterface) => {
  const [toggle, setToggle] = React.useState<boolean>(false)
  return (
    <>
      <span onClick={() => setToggle(true)}>{children}</span>
      <div className={`absolute inset-0 w-full h-full ${toggle ? '': 'hidden'}`} style={{ "zIndex": 999 }}>
        <div className='absolute w-full h-full' style={{ backgroundColor: 'rgba(0,0,0,.3)', zIndex: -1 }} onClick={() => setToggle(false)} />
        <div className='h-[100vh] bg-white p-4 flex flex-col pt-[71px] w-[200px] border-e bg-white'>
          <button className='rounded hover:border p-4 text-left'>Home</button>
          <button className='rounded hover:border p-4 text-left'>Home</button>
          <button className='rounded hover:border p-4 text-left'>Home</button>
          <button className='rounded hover:border p-4 text-left'>Home</button>
          <button className='rounded hover:border p-4 text-left'>Home</button>
        </div>
      </div>
    </>
  )
}

export default LeftMenu