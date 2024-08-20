import React from 'react'
import { PageInterface } from '@/data/interfaces/page'
import DashboardFrame from '../components/dashboard'

export const DashboardScreen = ({dispatch, router}:PageInterface) => {
  return <DashboardFrame dispatch={dispatch} router={router} />
}
