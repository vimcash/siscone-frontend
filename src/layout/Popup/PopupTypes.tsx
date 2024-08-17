import { AddSimplePopup } from '@/feats/main/components/AddSimplePopup'
import { selectCurrent } from '@/feats/main/states/varietyState'
import { useAppSelector } from '@/hooks'
import React from 'react'

const PopupTypes = ({ dispatch, type }) => {
  const typeComponent = {
    category: <AddSimplePopup dispatch={dispatch} state={useAppSelector(selectCurrent)} type="category" />,
    unitMesure: <AddSimplePopup dispatch={dispatch} state={useAppSelector(selectCurrent)} type="unitMesure" />
  }
  return (
    <>{typeComponent[type]}</>
  )
}

export default PopupTypes