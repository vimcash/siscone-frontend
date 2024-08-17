import React from 'react'
import InventoryFrame from '../components/InventoryFrame'

export const InventoryContainer = ({dispatch, router}) => {
  return <InventoryFrame dispatch={dispatch} router={router}/>
}