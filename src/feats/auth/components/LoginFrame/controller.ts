import { setReady, unsetReady } from "../../../../data/state"
import { setDelay } from "../../../../utils"
import { usePostLogin } from "../../hooks"
import { useGetCurrUser } from "../../hooks/useGetCurrUser"
import { setLoginPassword, setLoginUsername } from '../../states/authState'

let dispatch
class Controller {
  static instance: Controller
  private router: any
  private state:any

  constructor(inDispatch:any, router:any, appReady:boolean) {
    dispatch = inDispatch
    this.router = router
    this.setAppReadyDelay(appReady)
  }

  public static getInstance(inDispatch:any, router:any, state:any, appReady:boolean, isLogin: boolean) {
    if(isLogin){
      this.redirectAndDestroy(router, '/')
      return this.instance
    }
    if(!this.instance)
      this.instance = new Controller(inDispatch, router, appReady)
    this.instance.refreshData(state)
    return this.instance
  }

  public static destroy = () => {
    if(this.instance)
      delete this.instance
  }
  
  private async setAppReadyDelay(appReady) {
    if(!appReady){
      await setDelay(.2)
      await dispatch(setReady())
    }
  }

  private async refreshData(state) {
    this.state = state
  }

  private static redirectAndDestroy(router, path:string) {
    if(typeof window != 'undefined' && router)
      router.push(path)
    if(this.instance)
      delete this.instance
  }

  public setUsername = (e) => dispatch(setLoginUsername(e))
  public setPassword = (e) => dispatch(setLoginPassword(e))

  public login = async () => {
    if(this.state.username == '' || this.state.password == '')
      return console.log('vacío mi patron')
    await dispatch(usePostLogin(this.state))
    await dispatch(useGetCurrUser())
  }

  public checkCurrUser = () => dispatch(useGetCurrUser())
  public getUsername = () => this.state.username
  public getPassword = () => this.state.password
}

export default Controller