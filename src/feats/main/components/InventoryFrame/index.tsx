import React from 'react'
import Controller from './controller'
import { useAppSelector } from '@/hooks'
import { selectAppReady, selectIsLogin } from '@/data/state'
import { selectFilterInventory, selectSearch } from '../../states/invetoryState'

const InventoryFrame = ({ dispatch, router }) => {
  const controller = Controller.getInstance(
    dispatch,
    router,
    useAppSelector(selectFilterInventory),
    useAppSelector(selectSearch),
    useAppSelector(selectAppReady),
    useAppSelector(selectIsLogin))
  if (!controller)
    return <></>
  const {
    getFilter,
    setFilter,
    getSearch
  } = controller
  console.log(getFilter())
  return <div style={{ padding: '1em' }}>
    <div>
      <label>Search</label>
      <input value={getSearch()} className='form-control mb-1' onChange={setFilter} />

      <div className="accordion" id="accordionInventory">
        {
          getFilter().map((item) =>
            <div className="accordion-item" key={item.key.replaceAll(' ', '')}>
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={{textTransform: 'capitalize'}} type="button" data-bs-toggle="collapse" data-bs-target={`#${item.key.replaceAll(' ', '')}`} aria-expanded="false" aria-controls={item.key.replaceAll(' ', '')}>
                  {item.key.toLowerCase()}
                </button>
              </h2>
              <div id={item.key.replaceAll(' ', '')} className="accordion-collapse collapse" data-bs-parent="#accordionInventory">
                <div className="accordion-body">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">Sel.</th>
                        <th scope="col">Producto</th>
                        <th scope="col">Cant.</th>
                        <th scope="col">Category</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        item.data.map((subItem) =>
                          <tr key={subItem.id}>
                            <th scope="row" style={{ textAlign: 'center' }}><input type='checkbox' /></th>
                            <td style={{ textTransform: "capitalize" }}>{subItem.productName.toLowerCase()}</td>
                            <td>{subItem.qty}</td>
                            <td>{subItem.categoryName}</td>
                          </tr>)
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  </div>
}

export default InventoryFrame