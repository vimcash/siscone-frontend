import { setReady } from "../../../../data/state"
import { setDelay } from "../../../../utils"
import { useGetEstablishment } from "../../hooks/useGetEstablishment"
import { useGetProducts } from "../../hooks/useGetProducts"

let dispatch
class Controller {
  static instance: Controller
  private router: any
  private state:any
  private products:any
  private totals:any
  private prePurchaseList:any
  private establishments:any

  constructor(inDispatch:any, router:any, appReady: boolean) {
    dispatch = inDispatch
    this.router = router
    this.setAppReadyDelay(appReady)
  }

  public static getInstance(inDispatch:any, router:any, state:any, stateTotals:any, statePrePurchaseList:any, stateProduct:any, stateEstablishment:any, appReady: boolean, isLogin: boolean) {
    if(!isLogin){
      this.redirectAndDestroy(router, 'login')
      return this.instance
    }
    
    if(!this.instance)
      this.instance = new Controller(inDispatch, router, appReady)
    this.instance.refreshData(state, stateTotals, statePrePurchaseList, stateProduct, stateEstablishment)
    return this.instance
  }

  public static destroy = () => {
    if(this.instance)
      delete this.instance
  }
  private async setAppReadyDelay(appReady) {
    if(!appReady){
      await setDelay(.2)
      await dispatch(useGetEstablishment())
      await dispatch(useGetProducts())
      await dispatch(setReady())
    }
  }

  private async refreshData(state:any, stateTotals:any, statePrePurchaseList:any, stateProduct:any, stateEstablishment:any) {
    this.state = state
    this.totals = stateTotals
    this.prePurchaseList = statePrePurchaseList
    this.products = stateProduct
    this.establishments = stateEstablishment
  }

  private static async redirectAndDestroy(router, path:string) {
    router.push(path)
    if(this.instance)
      delete this.instance
  }

  public getCurr = () => this.state
  public getProducts = () => this.products
  public getTotals = () => this.totals
  public getEstablishments = () => this.establishments
  public getPrePurchaseList = () => this.prePurchaseList
}

export default Controller