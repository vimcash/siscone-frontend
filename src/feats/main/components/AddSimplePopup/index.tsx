import React from 'react'
import { usePostCategory } from '../../hooks/usePostCategory'
import { hidePopup } from '@/layout/Popup/states'
import { useGetCategory } from '../../hooks/useGetCategory'
import Controller from './controller'

export const AddSimplePopup = ({dispatch, state, type}) => {
  const {
    getDescription,
    getLiteral,
    setLiteral,
    setDescription,
    getTitle,
    save
  } = Controller.getInstance(dispatch, state, type)
  return (
    <>
      <label className='fs-3' style={{textTransform: 'capitalize'}}>{getTitle()}</label>
      <input
        className='form-control mt-2' 
        placeholder='Descripción' 
        value={getDescription()} 
        onChange={(e:any) => setDescription(e)} />
      <input 
        className='form-control mt-2'
        placeholder='Literal'
        value={getLiteral()}
        onChange={(e:any) => setLiteral(e)} />
      <button className='btn btn-primary mt-2 w-100' onClick={async () => save()}>enviar</button>
    </>
  )
}
