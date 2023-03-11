import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import { AppState } from "../../../../data/store/types"
import { useGetProducts } from "../../hooks/useGetProducts"
import actions from "./actions"

const initialState = {
  productName: "",
  categoryID: "",
  price: 0,
  description: "",
  products: [],
  productDetails: {},
  status: "idle"
}

const productState = createSlice({
  name: "product",
  initialState,
  reducers: actions,
  extraReducers(builder){
    builder
      .addCase(useGetProducts.pending, (state) => {
        state.status = "loading"
      })
      .addCase(useGetProducts.rejected, (state) => {
        state.status = "failed"
        toast.error("Ups! Algo salio mal")
      })
      .addCase(useGetProducts.fulfilled, (state, action) => {
        state.status = "idle"
        if(!action.payload){
          toast.error("Ups! Algo salio mal")
          return
        }
        toast.success("Success!!")
        state.products = action.payload
      })
  }
})

export const { setProductName, setCategoryID, setPrice, setDescription, setProductDetails, deleteProduct } = productState.actions
export const selectProduct = (state:AppState) => state.product
export const productReducer = productState.reducer