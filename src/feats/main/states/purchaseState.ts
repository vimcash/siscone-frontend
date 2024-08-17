import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { AppState } from "@/data/store/types"
import actions from "./action"
import { useGetProducts } from "../hooks/useGetProducts"
import { usePostPrePurchase } from "../hooks/usePostPrePurchase"
import { useGetEstablishment } from "../hooks/useGetEstablishment"
import { usePostConfirmPurchase } from "../hooks/usePostConfirmPurchase"
import { usePostPreSale } from "../hooks/usePostPreSale"
import { usePostConfirmSale } from "../hooks/usePostConfirmSale"
import localStorage from "@/libs/localStorage"
import { toast } from "react-toastify"

const username = localStorage.get('username')
if(localStorage.get(`${username}|prePurchaseObj`) === 'undefined')
  localStorage.set(`${username}|prePurchaseObj`, '')
const localPurchase = localStorage.get(`${username}|prePurchaseObj`) ? JSON.parse(localStorage.get(`${username}|prePurchaseObj`)) : null
const localSale = localStorage.get(`${username}|preSaleObj`) ? JSON.parse(localStorage.get(`${username}|preSaleObj`)) : null
const initialState = {
  establishmentList: [],
  establishmentListFilter: [],
  productList: [],
  productListFilter: [],
  prePurchaseList: localPurchase?.productPurchaseTMP || [],
  preSaleList: localSale?.productPurchaseTMP || [],
  prePurchaseListFilter: localPurchase?.productPurchaseTMP || [],
  preSaleListFilter: localSale?.productPurchaseTMP || [],
  search: "",
  currentBuy: {
    barcode: "",
    quantity: 0,
    establishment: "",
    supplier: "65f3b391e7952e4be72acf9d",
    _purchaseId: localPurchase?._id || ''
  },
  currentSell: {
    barcode: "",
    quantity: 0,
    establishment: "",
    customer: "65ed2dd2ea445ba45559c240",
    _saleId: localSale?._id || ''
  },
  purchase: {
    totalPurchase: localPurchase?.totalPurchase || 0,
    totalQty: localPurchase?.productQuantity || 0

  },
  sale: {
    totalPurchase: localSale?.totalPurchase || 0,
    totalQty: localSale?.productQuantity || 0
  }
  
}

const purchaseSlice = createSlice({
  name: 'purchase',
  initialState,
  reducers: actions.puchase,
  extraReducers(builder) {
      builder
        .addCase(useGetEstablishment.fulfilled, (state, {payload}) => {
          state.search = "",
          state.establishmentList = payload
          state.establishmentListFilter = payload
        })
        .addCase(useGetEstablishment.rejected, (state, {error}) => {
          const errorJson = JSON.parse(error.message)
          console.log(errorJson.data.errors[0])
        })
        .addCase(useGetProducts.fulfilled, (state, {payload}) => {
          state.search = "",
          state.productList = payload
          state.productListFilter = payload
        })
        .addCase(useGetProducts.rejected, (state, {error}) => {
          const errorJson = JSON.parse(error.message)
          toast.error(errorJson.data.errors[0].mesage)
        })
        .addCase(usePostPrePurchase.fulfilled, (state, {payload}) => {
          console.log(payload)
          state.currentBuy._purchaseId = payload._id
          state.prePurchaseList = payload.productPurchaseTMP
          localStorage.set(`${username}|prePurchaseObj`, JSON.stringify(payload))
          state.purchase.totalPurchase = payload.totalPurchase
          state.purchase.totalQty = payload.productQuantity
          state.prePurchaseListFilter = payload.productPurchaseTMP
        })
        .addCase(usePostPrePurchase.rejected, (state, {error}) => {
          const errorJson = JSON.parse(error.message)
          toast.error(errorJson.data.errors[0].mesage)
        })
        .addCase(usePostPreSale.fulfilled, (state, {payload}) => {
          console.log(payload.productPurchaseTMP)
          console.log(payload)
          state.currentSell._saleId = payload._id
          localStorage.set(`${username}|preSaleObj`, JSON.stringify(payload))
          state.preSaleList = payload.productPurchaseTMP
          state.sale.totalPurchase = payload.totalSales
          state.sale.totalQty = payload.productQuantity
          state.preSaleListFilter = payload.productPurchaseTMP
        })
        .addCase(usePostPreSale.rejected, (state, {error}) => {
          const errorJson = JSON.parse(error.message)
          toast.error(errorJson.data.errors[0].mesage)
        })
        .addCase(usePostConfirmPurchase.fulfilled, (state, {payload}) => {
          localStorage.set(`${username}|prePurchaseObj`, '')
          state.prePurchaseList = []
          state.prePurchaseListFilter = []
          state.purchase.totalPurchase = 0
          state.purchase.totalQty = 0
          console.log(payload)
        })
        .addCase(usePostConfirmPurchase.rejected, (state, {error}) => {
          const errorJson = JSON.parse(error.message)
          toast.error(errorJson.data.errors[0].mesage)
        })
        .addCase(usePostConfirmSale.fulfilled, (state, {payload}) => {
          state.preSaleList = []
          state.preSaleListFilter = []
          state.sale.totalPurchase = 0
          state.sale.totalQty = 0
          localStorage.set(`${username}|preSaleObj`, '')
        })
        .addCase(usePostConfirmSale.rejected, (state, {error}) => {
          const errorJson = JSON.parse(error.message)
          toast.error(errorJson.data)
        })
  },
})


export const selectFilterProducts = (state:AppState) => state.purchase.productListFilter
export const selectFilterPersonal1 = (state:AppState) => ({totalPurchase: state.purchase.totalPurchase, totalQty: state.purchase.totalQty})
export const selectTotalPurchase = (state:AppState) => state.purchase.purchase
export const selectTotalSale = (state:AppState) => state.purchase.sale
export const selectFilterEstablishment = (state:AppState) => state.purchase.establishmentListFilter
export const selectPrePurchaseListFilter = (state:AppState) => state.purchase.prePurchaseListFilter
export const selectPreSaleListFilter = (state:AppState) => state.purchase.preSaleListFilter
export const selectCurrentBuy = (state:AppState) => state.purchase.currentBuy
export const selectCurrentSale = (state:AppState) => state.purchase.currentSell
export const {
  setBuyEstablishment, 
  setBuyProduct, 
  setBuyQty,
  setSellEstablishment, 
  setSellProduct, 
  setSellQty
} = purchaseSlice.actions
export const purchaseReducer = purchaseSlice.reducer