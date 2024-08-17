import { setReady, unsetReady } from "../../../../data/state"
import { setDelay } from "../../../../utils"
import { useGetCurrUser } from "../../../auth/hooks/useGetCurrUser"
import { useGetCategory } from "../../hooks/useGetCategory"
import { useGetCompanies } from '../../hooks/useGetCompanies'
import { useGetProducts } from "../../hooks/useGetProducts"
import { useGetUnitMesure } from "../../hooks/useGetUnitMesure"
import { usePostProduct } from "../../hooks/usePostProduct"

let dispatch
class Controller {
  static instance: Controller
  private router: any
  private productList:any
  private categoryList:any
  private unitMesureList:any
  private stateCurr:any

  constructor(inDispatch:any, router:any, appReady: boolean) {
    dispatch = inDispatch
    this.router = router
    this.setAppReadyDelay(appReady)
  }

  public static getInstance(inDispatch:any, router:any, stateCurr:any, productList:any, categoryList:any, unitMesureList:any, appReady: boolean, isLogin: boolean) {
    if(!isLogin){
      this.redirectAndDestroy(router, 'login')
      return this.instance
    }
    
    if(!this.instance)
      this.instance = new Controller(inDispatch, router, appReady)
    this.instance.refreshData(stateCurr, productList, categoryList, unitMesureList)
    return this.instance
  }

  public static destroy = () => {
    if(this.instance)
      delete this.instance
  }

  private async setAppReadyDelay(appReady) {
    if(!appReady){
      await setDelay(.2)
      await dispatch(useGetProducts())
      await dispatch(useGetCategory())
      await dispatch(useGetUnitMesure())
      await dispatch(setReady())
    }
  }

  private async refreshData(stateCurr:any, productList:any, categoryList:any, unitMesureList:any) {
    this.unitMesureList = unitMesureList
    this.categoryList = categoryList
    this.productList = productList
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

  public add = async () => {
    await dispatch(usePostProduct(this.stateCurr))
    await dispatch(useGetProducts())
  }
  public getCurr = () => this.stateCurr
  public getProducts = () => this.productList
  public getCategories = () => this.categoryList
  public getUnitMesure = () => this.unitMesureList
}

export default Controller