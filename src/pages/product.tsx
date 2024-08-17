import { ProductContainer } from '@/feats/main/containers/ProductContainer'
import React from 'react'

const product = ({ dispatch, router }) => {
  return <ProductContainer dispatch={dispatch} router={router} />
}

export default product