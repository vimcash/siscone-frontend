import React from 'react'
import Controller from './controller'
import { useAppSelector } from '@/hooks'
import { selectAppReady, selectIsLogin } from '@/data/state'
import { Icon } from '@/components/Icon'

const DashboardFrame = ({ dispatch, router }) => {
  const controller = Controller.getInstance(dispatch, router, {}, useAppSelector(selectAppReady), useAppSelector(selectIsLogin))
  if(!controller)
    return <></>
  const {
    redirectTo
  } = controller
  return (
    <div className='position-absolute top-50 start-50 translate-middle' style={{display: 'flex', gap: 15  }}>
      <div style={{display:'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', minWidth: '79px'}}>
        <button className="btn btn-primary" style={{minHeight: '79px'}} onClick={() => console.log('product')}><Icon color='white' icon={'box'}/></button>
        <label>Productos</label>
      </div>
      <div style={{display:'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', minWidth: '79px', minHeight: '79px'}}>
        <button className="btn btn-primary" style={{minHeight: '79px'}} onClick={() => redirectTo('purchase')}><Icon color='white' icon={'shoppingCar'}/></button>
        <label>Compra</label>
      </div>
      <div style={{display:'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', minWidth: '79px', minHeight: '79px'}}>
        <button className="btn btn-primary" style={{minHeight: '79px'}} onClick={() => redirectTo('sale')}><Icon color='white' icon={'invoice'}/></button>
        <label>Ventas</label>
      </div>
      <div style={{display:'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', minWidth: '79px', minHeight: '79px'}}>
        <button className="btn btn-primary" style={{minHeight: '79px'}} onClick={() => redirectTo('company')}><Icon color='white' icon={'establishment'}/></button>
        <label>Compañías</label>
      </div>
      <div style={{display:'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', minWidth: '79px', minHeight: '79px'}}>
        <button className="btn btn-primary" style={{minHeight: '79px'}} onClick={() => redirectTo('inventory')}><Icon color='white' icon={'store'}/></button>
        <label>Inventario</label>
      </div>
    </div>
  )
}

export default DashboardFrame