import { useAppSelector } from "@/hooks"
import Controller from "./controller"
import { selectIsLogin } from "@/data/state"

const Header = ({dispatch, router, companyName}:any) => {
  const {
    getIsLogin,
    redirectTo,
    logout
  } = Controller.getInstance(dispatch, router, useAppSelector(selectIsLogin))
  if(!getIsLogin())
    return <></>
  return <>
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <div className="d-flex" style={{gap: '10px'}}>
          <button className="btn btn-outline-secondary" onClick={() => redirectTo('/')}>Back</button>
          <a className="navbar-brand" style={{textTransform: "capitalize"}}>{companyName || 'Navbar'}</a>
        </div>
        <div className="d-flex" role="search">
          <button className="btn btn-outline-secondary" type="submit" onClick={() => logout()}>Logout</button>
        </div>
      </div>
    </nav>
  </>
}

export default Header