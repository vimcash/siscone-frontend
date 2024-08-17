import { hidePopup } from '@/layout/Popup/states'
import { useGetCategory } from '../../hooks/useGetCategory'
import { usePostCategory } from '../../hooks/usePostCategory'
import { setCurrLiteral, setCurrDesc, setInit } from '../../states/varietyState'
import { useGetUnitMesure } from '../../hooks/useGetUnitMesure'
import { usePostUnitMesure } from '../../hooks/usePostUnitMesure'

let dispatch
class Controller {
  private static instance: Controller
  private input
  private state
  private titleByType = {
    category: 'agregar categoría',
    unitMesure: 'agregar unidad de medida'
  }
  private type

  constructor(inDispatch:any) {
    dispatch = inDispatch
  }
  public static getInstance(inDispatch:any, state:any, type:any) {
    if(!this.instance)
      this.instance = new Controller(inDispatch)
    this.instance.refreshData(state, type)
    return this.instance
  }
  public refreshData  = (state:any, type:any) => {
    this.state = state

    this.type = type
  }
  public save = async () => {
    console.log(this.state)
    await dispatch(this.type == "category" ? usePostCategory(this.state) : usePostUnitMesure(this.state))
    await dispatch(this.type == "category" ? useGetCategory() : useGetUnitMesure())
    await dispatch(setInit())
    await dispatch(hidePopup())
  }

  public setDescription = ({target}:any) => dispatch(setCurrDesc(target.value))
  public setLiteral = ({target}:any) => dispatch(setCurrLiteral(target.value))
  public getDescription = () => this.state.description
  public getLiteral = () => this.state.literal
  public getTitle = () => this.titleByType[this.type]
}

export default Controller