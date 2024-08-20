'use client'
import React from 'react'
// import Controller from './controller'
import { useAppSelector } from '@/hooks'
import { selectAppReady, selectIsLogin } from '@/data/state'
import { PropInterface } from './interfaces'
import { Input } from '@/components/ui/input'
import { Chart } from '@/components/simplify/chart'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Dropdown } from '@/components/simplify/dropdown'
import LeftMenu from '@/layout/LeftMenu'

const DashboardFrame = ({dispatch, router}:PropInterface) => {
  // const controller = Controller.getInstance({
  //   dispatch,
  //   router,
  //   state: useAppSelector(selectLogin),
  //   appReady: useAppSelector(selectAppReady),
  //   isLogin: useAppSelector(selectIsLogin)
  // })
  // if(!controller)
  //   return <></>
  // const {
  //   getCurrent,
  //   setCode,
  //   setPassword,
  //   setUsername,
  //   login
  // } = controller
  const setDemo = () => {var prueba = ''}
  const valueDemo = ""
  return (
    <>
      <nav className='flex justify-between items-center p-4 border-b'>
        <div className='flex items-center gap-2'>
          <LeftMenu>
            <button className='rounded border border-white hover:border-inherit p-1'>
              <svg width="25" height="25" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_201_3)">
                  <path d="M137.5 612.5H662.5M137.5 412.5H662.5M137.5 212.5H662.5" stroke="black" stroke-width="75" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <filter id="filter0_d_201_3" x="-4" y="0" width="808" height="808" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_201_3" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_201_3" result="shape" />
                  </filter>
                </defs>
              </svg>
            </button>
          </LeftMenu>
          <span className='text-lg font-semibold'>Siscone</span>
        </div>
        <Dropdown onLogout={() => console.log('prueba')}>
          <div>
            <Avatar>
              <AvatarImage src="https://i.pinimg.com/736x/ea/4a/f4/ea4af4b56d01ead6c32cee6106532d28.jpg" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </Dropdown>
      </nav>
      <main>
        <article className='h-[89vh] p-8'>
          <Chart />
        </article>
      </main>
    </>
  )
}

export default DashboardFrame