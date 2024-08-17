import { useAppSelector } from '@/hooks'
import React from 'react'
import { selectCurrentCompany, selectFilterCompany, setCompanyId, setCompanyName, setCompanyEstablishment, setCompanyEstablishmentSubname, setCompanyAddress, setCompanyOwner, setCompanyEmail, setCompanyKeycloakClientId } from '../../states/companyState'
import { usePostCompany } from '../../hooks/usePostCompany'
import { useGetCompanies } from '../../hooks/useGetCompanies'
import LocalStorage from "../../../../libs/localStorage"
import Controller from './controller'
import { selectAppReady, selectIsLogin } from '@/data/state'

const CompanyFrame = ({dispatch, router}) => {
  const controller = Controller.getInstance(
    dispatch, 
    router, 
    useAppSelector(selectFilterCompany), 
    useAppSelector(selectCurrentCompany), 
    useAppSelector(selectAppReady), 
    useAppSelector(selectIsLogin))
  if(!controller)
    return <></>
  const {
    getCurr,
    getCompanies
  } = controller
  return (
    <div style={{padding: '1em'}}>
      <div className='row'>
        <div className='col-md-8'>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Sel.</th>
                <th scope="col">Compañía</th>
              </tr>
            </thead>
            <tbody>
              {
                getCompanies().map((company) => 
                <tr key={company._id}>
                  <th scope="row">1</th>
                  <td style={{textTransform: "capitalize"}}>{company.name.toLowerCase()}</td>
                </tr>)
              }
            </tbody>
          </table>
        </div>
        <div className='col-md-4'>
          <label className='form-label'>Identificación</label>
          <input className='form-control' value={getCurr().rnc} onChange={(e:any) => dispatch(setCompanyId(e.target.value))} />
          <label className='form-label'>Nombre</label>
          <input className='form-control' value={getCurr().name} onChange={(e:any) => dispatch(setCompanyName(e.target.value))} />
          <label className='form-label'>Owner</label>
          <input className='form-control' value={getCurr().owner} onChange={(e:any) => dispatch(setCompanyOwner(e.target.value))} />
          <label className='form-label'>Keycloak Client</label>
          <input className='form-control' value={getCurr().keycloakClientId} onChange={(e:any) => dispatch(setCompanyKeycloakClientId(e.target.value))} />
          <label className='form-label'>Establecimientos</label>
          <input className='form-control' value={getCurr().description} onChange={(e:any) => dispatch(setCompanyEstablishment(e.target.value))} />
          <label className='form-label'>Correo Electrónico</label>
          <input className='form-control' value={getCurr().email} onChange={(e:any) => dispatch(setCompanyEmail(e.target.value))} />
          <label className='form-label'>Sucursal</label>
          <input className='form-control' value={getCurr().subname} onChange={(e:any) => dispatch(setCompanyEstablishmentSubname(e.target.value))} />
          <label className='form-label'>Dirección</label>
          <input className='form-control' value={getCurr().address} onChange={(e:any) => dispatch(setCompanyAddress(e.target.value))} />
          <button className='btn btn-primary mt-3 w-100' onClick={() => dispatch(usePostCompany(getCurr()))}>enviar</button>
        </div>
      </div>
    </div>
  )
}

export default CompanyFrame

