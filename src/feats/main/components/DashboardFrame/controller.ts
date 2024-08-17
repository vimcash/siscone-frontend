import { setReady, unsetReady } from "../../../../data/state"
import { setDelay } from "../../../../utils"
import { useGetCurrUser } from "../../../auth/hooks/useGetCurrUser"

let dispatch
class Controller {
  static instance: Controller
  private router: any
  private state:any

  constructor(inDispatch:any, router:any, appReady: boolean) {
    dispatch = inDispatch
    this.router = router
    this.setAppReadyDelay(appReady)
  }

  public static getInstance(inDispatch:any, router:any, state:any, appReady: boolean, isLogin: boolean) {
    if(!isLogin){
      this.redirectAndDestroy(router, 'login')
      return this.instance
    }
    
    if(!this.instance)
      this.instance = new Controller(inDispatch, router, appReady)
    this.instance.refreshData(state)
    return this.instance
  }

  private async setAppReadyDelay(appReady) {
    if(!appReady){
      await setDelay(.2)
      await dispatch(setReady())
    }
  }

  public static destroy = () => {
    if(this.instance)
      delete this.instance
  }

  private async refreshData(state) {
    this.state = state
  }

  private static async redirectAndDestroy(router, path:string) {
    if(typeof window != 'undefined' && router)
      router.push(path)
    if(this.instance)
      delete this.instance
  }
  public redirectTo = async (path:string) => {
    await dispatch(unsetReady())
    this.router.push(path)
  }
  public getCompanies = async (name: string) => {
    await dispatch(useGetCurrUser())
  }

}

export default Controller