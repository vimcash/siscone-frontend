import React from 'react'
import LoginFrame from '../components/login-frame'
import { PageInterface } from '@/data/interfaces/page'

export const LoginScreen= ({dispatch, router}:PageInterface) => {
  return <LoginFrame dispatch={dispatch} router={router} />
}
