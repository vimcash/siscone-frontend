import { createSlice } from "@reduxjs/toolkit"
import { AppState } from "@/data/store/types"
import actions from "./action"
import { useGetInventory } from "../hooks/useGetInventory"
import { groupBy } from "@/utils/groupBy"

const initialState = {
  inventoryList: [],
  inventoryListFilter: [],
  search: "",
  wareHouseList: [],
}

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: actions.inventory,
  extraReducers(builder) {
      builder
        .addCase(useGetInventory.fulfilled, (state, {payload}) => {
          state.search = "",
          state.inventoryList = groupBy(payload.map(item => ({
            id: item._id,
            warehouseId: item.warehouse._id,
            warehouseName: item.warehouse.description,
            unitMeasureName: item.product.unitMeasure.description,
            productId: item.product._id,
            productName: item.product.productName,
            categoryName: item.product.category.description,
            qty: `${item.quantity} ${item.product.unitMeasure.literal}`
          })), 'warehouseName')
          console.log(state.inventoryList)
          state.inventoryListFilter = state.inventoryList
          console.log(payload)
        })
        .addCase(useGetInventory.rejected, (state, {error}) => {
          console.error(error)
        })
  },
})

// Agregar consulta de pistola
// Agregar impresión de la factura
// Investigar como enviar código por puerto COM
// Investigar como enviar por bluetooth

export const selectFilterInventory = (state:AppState) => state.inventory.inventoryListFilter
export const selectSearch = (state:AppState) => state.inventory.search
export const {
  setSearch
} = inventorySlice.actions
export const inventoryReducer = inventorySlice.reducer