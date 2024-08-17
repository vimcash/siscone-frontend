import React from 'react'
import PurchaseFrame from '../components/PurchaseFrame'

export const PurchaseContainer = ({dispatch, router}:any) => {
  return <PurchaseFrame dispatch={dispatch} router={router} isSell={false}/>
}
