import React from 'react'
import LoginFrame from '../components/LoginFrame'
import { useAppSelector } from '@/hooks'
import { selectLogin } from '../states/authState'

export const LoginContainer = ({dispatch, router}) => {
  return <LoginFrame dispatch={dispatch} router={router}/>
}
