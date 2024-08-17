import { unsetInitApp } from "@/data/state"
import { useGetCurrUser } from "@/feats/auth/hooks/useGetCurrUser"
import { setDelay } from "@/utils"
import localStorage from "@/libs/localStorage"

let dispatch
class Controller {
  private static instance:Controller
  private router
  private appReady
  private appInit
  private isLogin
  private inLogin
  private companyName

  constructor(inDispatch, router){
    dispatch = inDispatch
    this.router = router
    this.delayApp()
  }
  public static getInstance(inDispatch, state, router) {
    if(!this.instance)
      this.instance = new Controller(inDispatch, router)
    this.instance.refreshData(state, router)
    return this.instance
  }

  private refreshData(state, router){
    this.inLogin = router.pathname == "/auth/login"
    this.router = router  
    this.appReady = state.appReady
    this.appInit = state.appInit
    this.isLogin = state.isLogin
    this.companyName = `${state.companyName}`.toLowerCase()
  }

  private async delayApp() {
    await setDelay(.5)
    localStorage.set(`currUser`, '')
    dispatch(useGetCurrUser())
    dispatch(unsetInitApp())
  }

  public getRouter = () => this.router
  public getAppReady = () => this.appReady
  public getAppInit = () => this.appInit
  public getInLogin = () => this.inLogin
  public getIsLogin = () => this.isLogin
  public getDispatch = () => dispatch
  public getCompanyName = () => this.companyName
}

export default Controller