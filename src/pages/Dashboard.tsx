import { DashboardContainer } from '@/feats/main/containers/DashboardContainer'
import React from 'react'

const dashboard = ({ dispatch, router }) => {
  return <DashboardContainer dispatch={dispatch} router={router} />
}

export default dashboard