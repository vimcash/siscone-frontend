import { useAppSelector } from '@/hooks'
import React from 'react'
import { selectCurrentProduct, selectFilterCategory, selectFilterProducts, setProductBarcode, setProductCategory, setProductName, setProductPriceSell, setProductPriceBuy, selectFilterUnitMesure, setProductUnitMesure } from '../../states/productState'
import { showPopupType } from '@/layout/Popup/states'
import { selectAppReady, selectIsLogin } from '@/data/state'
import Controller from './controller'

const ProductFrame = ({ dispatch, router }) => {
  const controller = Controller.getInstance(
    dispatch, 
    router, 
    useAppSelector(selectCurrentProduct), 
    useAppSelector(selectFilterProducts), 
    useAppSelector(selectFilterCategory), 
    useAppSelector(selectFilterUnitMesure), 
    useAppSelector(selectAppReady), 
    useAppSelector(selectIsLogin))
  if(!controller)
    return <></>
  const {
    getCurr,
    getCategories,
    getProducts,
    add,
    getUnitMesure
  } = controller
  return (
    <div style={{padding: '1em'}}>
      <div className='row'>
        <div className='col-md-8'>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Sel.</th>
                <th scope="col">Código</th>
                <th scope="col">Producto</th>
                <th scope="col">Medida</th>
                <th scope="col">Categoría</th>
              </tr>
            </thead>
            <tbody>
              {
                getProducts().map((product) => 
                <tr key={product._id}>
                  <th scope="row" style={{textAlign: 'center'}}><input type='checkbox' /></th>
                  <td>{product.barcode}</td>
                  <td style={{textTransform: "capitalize"}}>{product.productName.toLowerCase()}</td>
                  <td>{product.unitMeasure.description}</td>
                  <td>{product.category.description}</td>
                </tr>)
              }
            </tbody>
          </table>
        </div>
        <div className='col-md-4'>
          <label className='form-label-sm'>Código</label>
          <input className='form-control form-control-sm' value={getCurr().barcode} onChange={(e:any) => dispatch(setProductBarcode(e.target.value))} />
          <label className='form-label-sm'>Nombre</label>
          <input className='form-control form-control-sm' value={getCurr().productName} onChange={(e:any) => dispatch(setProductName(e.target.value))} />
          <label className='form-label-sm'>Categoría</label>
          <div className='input-group'>
            <select className='form-select form-select-sm' value={getCurr().category} onChange={(e:any) => dispatch(setProductCategory(e.target.value))}>
              <option value="">Seleccione una Categoría</option>
              {getCategories().map(category => <option key={category._id} value={category._id}>
                {category.description}
              </option>)}
            </select>
            <button className='input-group-text' onClick={() => dispatch(showPopupType('category'))}>+</button>
          </div>
          <label className='form-label-sm'>Unidad de Medida</label>
          <div className='input-group'>
            <select className='form-select form-select-sm' value={getCurr().unitMeasure} onChange={(e:any) => dispatch(setProductUnitMesure(e.target.value))}>
              <option value="">Seleccione una Unidad</option>
              {getUnitMesure().map(unitMeasure => <option key={unitMeasure._id} value={unitMeasure._id}>
                {unitMeasure.description}
              </option>)}
            </select>
            <button className='input-group-text' onClick={() => dispatch(showPopupType('unitMesure'))}>+</button>
          </div>
          <label className='form-label-sm'>Precio de Compra</label>
          <input className='form-control form-control-sm' value={getCurr().priceBuy} onChange={(e:any) => dispatch(setProductPriceBuy(e.target.value))} />
          <label className='form-label-sm'>Precio de Venta</label>
          <input className='form-control form-control-sm' value={getCurr().priceSell} onChange={(e:any) => dispatch(setProductPriceSell(e.target.value))} />
          <label className='form-label-sm'>Descripción</label>
          <input className='form-control form-control-sm'/>
          <button className='btn btn-primary mt-3 w-100' onClick={() => add()}>enviar</button>
        </div>
      </div>
    </div>
  )
}

export default ProductFrame

