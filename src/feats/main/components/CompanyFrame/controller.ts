import { setReady, unsetReady } from "../../../../data/state"
import { setDelay } from "../../../../utils"
import { useGetCurrUser } from "../../../auth/hooks/useGetCurrUser"
import { useGetCompanies } from '../../hooks/useGetCompanies'

let dispatch
class Controller {
  static instance: Controller
  private router: any
  private companies:any
  private stateCurr:any

  constructor(inDispatch:any, router:any, appReady: boolean) {
    dispatch = inDispatch
    this.router = router
    this.setAppReadyDelay(appReady)
  }

  public static getInstance(inDispatch:any, router:any, state:any, stateCurr:any, appReady: boolean, isLogin: boolean) {
    if(!isLogin){
      this.redirectAndDestroy(router, 'login')
      return this.instance
    }
    
    if(!this.instance)
      this.instance = new Controller(inDispatch, router, appReady)
    this.instance.refreshData(state, stateCurr)
    return this.instance
  }

  public static destroy = () => {
    if(this.instance)
      delete this.instance
  }

  private async setAppReadyDelay(appReady) {
    if(!appReady){
      await setDelay(.2)
      await dispatch(useGetCompanies())
      await dispatch(setReady())
    }
  }

  private async refreshData(state, stateCurr) {
    this.companies = state
    this.stateCurr = stateCurr
  }


  private static async redirectAndDestroy(router, path:string) {
    router.push(path)
    if(this.instance)
      delete this.instance
  }

  public redirectTo = async (path:string) => {
    await dispatch(unsetReady())
    this.router.push(path)
  }

  public getCurr = () => this.stateCurr
  public getCompanies = () => this.companies
}

export default Controller