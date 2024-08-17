import React from 'react'
import DashboardFrame from '../components/DashboardFrame'

export const DashboardContainer = ({ dispatch, router }) => {
  return <DashboardFrame dispatch={dispatch} router={router} />
}
