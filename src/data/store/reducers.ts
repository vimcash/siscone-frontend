import { authReducer } from "@/feats/auth"
import { productReducer } from "@/feats/main"
import { companyReducer } from "@/feats/main/states/companyState"
import { purchaseReducer } from "@/feats/main/states/purchaseState"
import { varietyReducer } from "@/feats/main/states/varietyState"
import { popupReducer } from "@/layout/Popup/states"
import { combineReducers } from "@reduxjs/toolkit"
import { globalReducer } from "../state"
import { inventoryReducer } from "@/feats/main/states/invetoryState"

const reducers = combineReducers({
  popup: popupReducer,
  auth: authReducer,
  product: productReducer,
  company: companyReducer,
  purchase: purchaseReducer,
  variety: varietyReducer,
  global: globalReducer,
  inventory: inventoryReducer
})

export default reducers