import { PurchaseContainer } from '@/feats/main/containers/PurchaseContainer'
import React from 'react'

const purchase = ({dispatch, router}:any) => {
  return <PurchaseContainer dispatch={dispatch} router={router} />
}

export default purchase