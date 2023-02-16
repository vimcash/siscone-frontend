import { combineReducers } from "@reduxjs/toolkit"
import { loginReducer } from "../../features/auth"
import { productReducer } from "../../features/dataManager"
import templateReducer from "../../features/Template/states/templateState"
const reducers = combineReducers({
  template: templateReducer,
  login: loginReducer, 
  product: productReducer
})

export default reducers