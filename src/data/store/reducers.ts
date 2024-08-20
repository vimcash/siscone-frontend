import { combineReducers } from "@reduxjs/toolkit"
import { globalReducer } from "../state"

const reducers = combineReducers({
  global: globalReducer
})
export default reducers