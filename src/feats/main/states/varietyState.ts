import { createSlice } from "@reduxjs/toolkit"
import actions from "./action"
import { usePostCategory } from "../hooks/usePostCategory"
import { AppState } from "@/data/store/types"
import { usePostUnitMesure } from "../hooks/usePostUnitMesure"

const initialState = {
  current: {
    description: "",
    literal: ""
  }
}

const varietySlice = createSlice({
  name: "variety",
  initialState,
  reducers: actions.variety,
  extraReducers(builder) {
      builder
        .addCase(usePostCategory.fulfilled, (state, {payload}:any) => {
          console.log(payload)
        })
        .addCase(usePostCategory.rejected, (state, {error}:any) => {
          console.log(error)
        })
        .addCase(usePostUnitMesure.fulfilled, (state, {payload}:any) => {
          console.log(payload)
        })
        .addCase(usePostUnitMesure.rejected, (state, {error}:any) => {
          console.log(error)
        })
  },
})

export const selectCurrent = (state: AppState) => state.variety.current
export const {
  setCurrDesc,
  setCurrLiteral,
  setInit
} = varietySlice.actions
export const varietyReducer = varietySlice.reducer