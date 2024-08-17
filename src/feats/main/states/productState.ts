import { createSlice } from "@reduxjs/toolkit"
import { useGetProducts } from "../hooks/useGetProducts"
import { AppState } from "@/data/store/types"
import { useGetCategory } from "../hooks/useGetCategory"
import actions from "./action"
import { usePostProduct } from "../hooks/usePostProduct"
import { useGetUnitMesure } from "../hooks/useGetUnitMesure"

const initialState = {
  productList: [],
  productListFilter: [],
  categoryList: [],
  categoryListFilter: [],
  unitMesureList: [],
  unitMesureListFilter: [],
  search: "",
  currentProduct: {
    productName: "",
    description: "",
    barcode: "",
    category: "",
    unitMeasure: "",
    priceBuy: "",
    priceSell: ""
  }
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: actions.product,
  extraReducers(builder) {
      builder
        .addCase(useGetProducts.fulfilled, (state, {payload}) => {
          state.search = "",
          state.productList = payload
          state.productListFilter = payload
          console.log(payload)
        })
        .addCase(useGetProducts.rejected, (state, {error}) => {
          console.error(error)
        })
        .addCase(useGetCategory.fulfilled, (state, {payload}) => {
          state.search = "",
          state.categoryList = payload
          state.categoryListFilter = payload
          console.log(payload)
        })
        .addCase(useGetCategory.rejected, (state, {error}) => {
          console.error(error)
        })
        .addCase(useGetUnitMesure.fulfilled, (state, {payload}) => {
          state.search = "",
          state.unitMesureList = payload
          state.unitMesureListFilter = payload
          console.log(payload)
        })
        .addCase(useGetUnitMesure.rejected, (state, {error}) => {
          console.error(error)
        })
        .addCase(usePostProduct.fulfilled, (state, {payload}) => {
          console.log(payload)
        })
        .addCase(usePostProduct.rejected, (state, {error}) => {
          console.error(error)
        })
  },
})


export const selectFilterProducts = (state:AppState) => state.product.productListFilter
export const selectFilterCategory = (state:AppState) => state.product.categoryListFilter
export const selectFilterUnitMesure = (state:AppState) => state.product.unitMesureListFilter
export const selectCurrentProduct = (state:AppState) => state.product.currentProduct
export const {
  setProductBarcode, 
  setProductName, 
  setProductCategory,
  setProductUnitMesure,
  setProductPriceSell,
  setProductPriceBuy } = productSlice.actions
export const productReducer = productSlice.reducer