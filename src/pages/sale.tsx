import React from 'react'
import { SaleContainer } from '@/feats/main/containers/SaleContainer'

const sale = ({dispatch, router}:any) => {
  return <SaleContainer dispatch={dispatch} router={router}/>
}

export default sale