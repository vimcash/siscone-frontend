import { PayloadAction } from "@reduxjs/toolkit";

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
  }
}

export default actions