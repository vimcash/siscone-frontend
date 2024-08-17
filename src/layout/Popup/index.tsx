import { useAppDispatch, useAppSelector } from '@/hooks'
import React from 'react'
import { hidePopup, selectPopupType } from './states'
import PopupTypes from './PopupTypes'

export const Popup = () => {
  const popupType = useAppSelector(selectPopupType)
  const dispatch = useAppDispatch()
  console.log(popupType)
  if(popupType == "none")
    return <></>
  return (
    <div className='position-absolute h-100 w-100 row ms-0 me-0' style={{zIndex: 1, background: 'rgba(0,0,0,.2)'}}>
      <div className='position-absolute bg-light p-4 col-md-3 rounded translate-middle top-50 start-50' style={{}}>
        <PopupTypes dispatch={dispatch} type={popupType} />
      </div>
      <div className='h-100 w-100' onClick={() => dispatch(hidePopup())} />
    </div>
  )
}