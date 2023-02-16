import React from 'react'
import { useAppSelector } from '../../../hooks'
import LoginFrame from '../components/LoginFrame/LoginFrame'
import { selectLogin } from '../states/loginState/loginState'

export const LoginContainer = () => {
  const login = useAppSelector(selectLogin)
  return (
    <div>
      <LoginFrame login={login}/>
    </div>
  )
}
