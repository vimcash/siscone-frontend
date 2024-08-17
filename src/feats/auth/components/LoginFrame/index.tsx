import { useAppDispatch, useAppSelector } from '@/hooks'
import React from 'react'
import { selectLogin, setLoginPassword, setLoginUsername } from '../../states/authState'
import { usePostLogin } from '../../hooks/usePostLogin'
import { useGetCurrUser } from '../../hooks/useGetCurrUser'
import Controller from './controller'
import { selectAppReady, selectIsLogin } from '@/data/state'
import { Icon } from '@/components/Icon'
import style from './style.module.css'
import { example } from '@/utils/print'

const LoginFrame = ({dispatch, router}:any) => {
  const controller = Controller.getInstance(dispatch, router, useAppSelector(selectLogin), useAppSelector(selectAppReady), useAppSelector(selectIsLogin))
  if(!controller)
    return <></>
  const {
    getUsername,
    getPassword,
    setUsername,
    setPassword,
    login,
    checkCurrUser
  } = controller
  return (
    <>
      <div className="position-absolute top-50 start-50 translate-middle">
        <div className="border shadow-sm" style={{background: '#fff'}}>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '36px', marginBottom: '36px' }}>
            <Icon icon="logo" size={35} />
          </div>
          <div style={{margin: '0 40px 6px' }}>
            <div className={`input-group ${style.inputGroup}`}>
              <span className="input-group-text"><Icon icon="user" size={15} /></span>
              <div className="form-floating">
                <input type="text" className="form-control form-control-sm" autoComplete='off' id="floatingInputGroup1" value={getUsername()} placeholder="Username" onChange={(e: any) => setUsername(e.target.value)} />
                <label htmlFor="floatingInputGroup1">Username</label>
              </div>
            </div>
          </div>
          <div style={{ margin: '0 40px 6px' }}>
            <div className={`input-group ${style.inputGroup}`}>
              <span className="input-group-text"><Icon icon="pass" size={15} /></span>
              <div className="form-floating">
                <input type="password" className="form-control form-control-sm" id="floatingInputGroup1" value={getPassword()} placeholder="Username" onChange={(e: any) => setPassword(e.target.value)} />
                <label htmlFor="floatingInputGroup1">Password</label>
              </div>
            </div>
          </div>
          <div  style={{ margin: '8px 40px', marginTop: '14px' }}>
            <button type="button" className="btn btn-primary w-100" onClick={() => login()}>Log in</button>
            <button type="button" className="btn btn-primary w-100" onClick={example}>Prueba</button>
          </div>
          <div className='d-flex' style={{ margin: '14px 40px 22px' }}>
            <div className='position-relative d-block' style={{top: '.45em', height: '1px', flexShrink: '1', flexGrow: '1', backgroundColor: 'rgb(219,219,219)', unicodeBidi: 'isolate'}}/>
            <div className='d-flex' style={{fontSize: '.8125rem', fontWeight: '600', lineHeight: 1.1538, margin: '0 18px', boxSizing: 'border-box', flexDirection: 'column'}}>
              O
            </div>
            <div className='position-relative d-block' style={{top: '.45em', height: '1px', flexShrink: '1', flexGrow: '1', backgroundColor: 'rgb(219,219,219)', unicodeBidi: 'isolate'}}/>
          </div>
          <div className='d-flex' style={{ justifyContent: 'center', gap: 5, alignItems: 'center', color: '#018169', margin: '8px 40px 0' }}>
            <Icon icon="whatsapp" size={20} />
            <label>Contacta con Soporte</label>
          </div>
          <div style={{marginTop: '36px'}}/>
        </div>
        <footer className='d-flex mt-2' style={{ justifyContent: 'center' }}>
          <Icon icon="poweredBy" size={20} />
        </footer>
      </div>
    </>
  )
}

export default LoginFrame