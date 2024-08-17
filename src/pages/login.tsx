import { LoginContainer } from '@/feats/auth/container/LoginContainer'
import React from 'react'
import Local from '../libs/localStorage';

const Login = ({dispatch, router}:any) => {
  console.log(process.env.PRUEBA)
  return <>
    <LoginContainer dispatch={dispatch} router={router}/>
  </>
}

export default Login