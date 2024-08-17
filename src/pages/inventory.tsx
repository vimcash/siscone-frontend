import React from 'react'
import { InventoryContainer } from '@/feats/main/containers/InventoryContainer'

const inventory = ({dispatch, router}) => {
  return <InventoryContainer dispatch={dispatch} router={router} />
}

export default inventory