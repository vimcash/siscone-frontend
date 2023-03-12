import { PayloadAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const actions = {
  setProductName: (state, {payload}: PayloadAction<string>) => {
    state.productName = payload
  },
  setCategoryID: (state, {payload}: PayloadAction<string>) => {
    state.categoryID = payload
  },
  setPrice: (state, {payload}: PayloadAction<Number>) => {
    state.price = payload
  },
  setDescription: (state, {payload}: PayloadAction<string>) => {
    state.description = payload
  },
  deleteProduct: (state, {payload}:PayloadAction<string>) => {
    if(state.products.products)
      state.products.products = state.products.products.filter((product:any) => product._id != payload)
      toast.success('Se elimino correctamente')
  }
}

export default actions