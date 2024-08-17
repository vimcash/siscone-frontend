import { setReady } from "../../../../data/state"
import { setDelay } from "../../../../utils"
import { useGetEstablishment } from "../../hooks/useGetEstablishment"
import { useGetInventory } from "../../hooks/useGetInventory"
import { useGetProducts } from "../../hooks/useGetProducts"
import { setSearch } from "../../states/invetoryState"

let dispatch
class Controller {
  static instance: Controller
  private router: any
  private state:any
  private filter:string

  constructor(inDispatch:any, router:any, appReady: boolean) {
    dispatch = inDispatch
    this.router = router
    this.setAppReadyDelay(appReady)
  }

  public static getInstance(inDispatch:any, router:any, state:any, filter:string, appReady: boolean, isLogin: boolean) {
    if(!isLogin){
      this.redirectAndDestroy(router, 'login')
      return this.instance
    }

    if(!this.instance)
      this.instance = new Controller(inDispatch, router, appReady)
    this.instance.refreshData(state, filter)
    return this.instance
  }

  public static destroy = () => {
    if(this.instance)
      delete this.instance
  }

  private async setAppReadyDelay(appReady) {
    if(!appReady){
      await setDelay(.2)
      await dispatch(useGetInventory())
      await dispatch(setReady())
    }
  }

  private async refreshData(state:any, filter:string) {
    this.state = state
    this.filter = filter
  }

  private static async redirectAndDestroy(router, path:string) {
    router.push(path)
    if(this.instance)
      delete this.instance
  }

  public getFilter = () => this.state
  public getSearch = () => this.filter
  public setFilter = (e) => {
    console.log(e.target.value)
    dispatch(setSearch(e.target.value))
  }
}

export default Controller