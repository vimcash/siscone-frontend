import { useAppDispatch, useAppSelector } from '@/hooks'
import React from 'react'
import { selectCurrentBuy, selectCurrentSale, selectFilterEstablishment, selectFilterProducts, selectPrePurchaseListFilter, selectPreSaleListFilter, selectTotalPurchase, selectTotalSale, setBuyEstablishment, setBuyProduct, setBuyQty, setSellEstablishment, setSellProduct, setSellQty } from '../../states/purchaseState'
import { usePostPrePurchase } from '../../hooks/usePostPrePurchase'
import { usePostConfirmPurchase } from '../../hooks/usePostConfirmPurchase'
import { usePostConfirmSale } from '../../hooks/usePostConfirmSale'
import { usePostPreSale } from '../../hooks/usePostPreSale'
import { selectAppReady, selectIsLogin } from '@/data/state'
import Controller from './controller'

const PurchaseFrame = ({isSell, dispatch, router}:any) => {
  const controller = Controller.getInstance(
    dispatch, 
    router, 
    useAppSelector(isSell ? selectCurrentSale : selectCurrentBuy),
    useAppSelector(isSell ? selectTotalSale : selectTotalPurchase),
    useAppSelector(isSell ? selectPreSaleListFilter : selectPrePurchaseListFilter),
    useAppSelector(selectFilterProducts),
    useAppSelector(selectFilterEstablishment),
    useAppSelector(selectAppReady), 
    useAppSelector(selectIsLogin))
  if(!controller)
    return <></>
  const {
    getCurr,
    getProducts,
    getTotals,
    getEstablishments,
    getPrePurchaseList
  } = controller
  return (
    <div style={{padding: '1em'}}>
      <div className='row'>
        <div className='col-md-8'>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Sel.</th>
                <th scope="col">Producto</th>
                <th scope="col">Cant.</th>
                <th scope="col">Precio</th>
              </tr>
            </thead>
            <tbody>
              {
                getPrePurchaseList().map((item) =>
                  <tr key={item._id}>
                    <th scope="row"><input type='checkbox' /></th>
                    <td style={{ textTransform: "capitalize" }}>{item.product.productName.toLowerCase()}</td>
                    <td>{item.quantity}</td>
                    <td>{item.sumProductPrice}</td>
                  </tr>)
              }
            </tbody>
          </table>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <label>Qty: {`${getTotals().totalQty}`}</label>
            <label>Total: {`${getTotals().totalPurchase}`}</label>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='mb-2' style={{display: 'flex', gap: '.5em', alignItems: 'center'}}>
            <label>Producto</label>
            <label htmlFor="chkScannerMode" style={{fontSize: '.8em'}}>Modo Scanner</label>
            <input type='checkbox' id="chkScannerMode"/>
          </div>
          <select className='form-select' value={getCurr().barcode} onChange={(e:any) => dispatch(isSell ? setSellProduct(e.target.value) : setBuyProduct(e.target.value))}>
            <option>Seleccionar Producto</option>
            {getProducts().map(product => <option key={product.barcode} value={product.barcode}>
                {product.productName}
              </option>)}
          </select>
          <label className='form-label'>Cantidad</label>
          <input className='form-control' value={getCurr().qty} onChange={(e:any) => isSell ? dispatch(setSellQty(e.target.value)) : dispatch(setBuyQty(e.target.value))} />
          <label className='form-label'>Almacén</label>
          <select className='form-select' value={getCurr().establishment} onChange={(e:any) => isSell ? dispatch(setSellEstablishment(e.target.value)) : dispatch(setBuyEstablishment(e.target.value))}>
            <option>Seleccionar Almacén</option>
            {getEstablishments().map(establishment => <option key={establishment._id} value={establishment._id}>
                {establishment.description}
              </option>)}
          </select>
          <button className='btn btn-primary mt-3 w-100' onClick={() => dispatch(isSell ? usePostPreSale(getCurr()) : usePostPrePurchase(getCurr()))}>enviar</button>
          <button className='btn btn-primary mt-3 w-100' disabled={(isSell ? !getCurr()._saleId : !getCurr()._purchaseId)} onClick={() => dispatch(isSell ? usePostConfirmSale(getCurr()._saleId) : usePostConfirmPurchase(getCurr()._purchaseId))}>confirmar</button>
        </div>
      </div>
    </div>
  )
}

export default PurchaseFrame