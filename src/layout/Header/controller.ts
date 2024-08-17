import LoginController from "@/feats/auth/components/LoginFrame/controller"
import DashboardController from "@/feats/main/components/DashboardFrame/controller"
import ProductController from "@/feats/main/components/ProductFrame/controller"
import PurchaseController from "@/feats/main/components/PurchaseFrame/controller"
import CompanyController from "@/feats/main/components/CompanyFrame/controller"
import { unsetReady } from "@/data/state"
import { useGetCurrUser } from "@/feats/auth/hooks/useGetCurrUser"
import localStorage from "@/libs/localStorage"

let dispatch
class Controller {
  static instance: Controller
  private router: any
  private isLogin: boolean

  constructor(inDispatch:any, router:any) {
    console.log('header construido')
    dispatch = inDispatch
    this.router = router
  }

  public static getInstance(inDispatch:any, router:any, isLogin: boolean) {
    if(!this.instance)
      this.instance = new Controller(inDispatch, router)
    this.instance.refreshData(isLogin)
    return this.instance
  }

  private refreshData = (isLogin:boolean) => {
    this.isLogin = isLogin
  }

  private destroyAll = () => {
    LoginController.destroy()
    DashboardController.destroy()
    PurchaseController.destroy()
    ProductController.destroy()
    CompanyController.destroy()
  }
  public redirectTo = async (path:string) => {
    this.destroyAll()
    this.router.push(path)
  }
  public logout = async () => {
    console.log(typeof this, this)
    await dispatch(unsetReady())
    this.destroyAll()
    const username = localStorage.get('username')
    localStorage.set(`${username}|currUser`, '')
    await dispatch(useGetCurrUser())
  }
  public getIsLogin = () => this.isLogin
  public getInDashboard = () => true

}

export default Controller