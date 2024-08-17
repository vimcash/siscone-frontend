import { createSlice } from "@reduxjs/toolkit"
import { AppState } from "../store/types"
import actions from "./actions"
import { usePostLogin } from "../../feats/auth/hooks"
import { useGetCurrUser } from "@/feats/auth/hooks/useGetCurrUser"

const initialState = {
  appReady: true,
  appInit: false,
  isLogin: null,
  companyName: null,
  
}

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: actions,
  extraReducers(builder) {
      builder
        .addCase(usePostLogin.pending, (state) => {
          state.appReady = false
        })
        .addCase(usePostLogin.rejected, (state) => {
          state.appReady = true
        })
        .addCase(usePostLogin.fulfilled, (state) => {
          state.isLogin = true
        })
        .addCase(useGetCurrUser.rejected, (state, {error}:any) => {
          console.error(error)
          state.isLogin = false
        })
        .addCase(useGetCurrUser.fulfilled, (state, {payload}:any) => {
          console.log('currUser', payload)
          state.isLogin = true
          state.companyName = payload.name
        })
  },
})

export const selectGlobal = (state:AppState) => state.global
export const selectAppReady = (state:AppState) => state.global.appReady
export const selectIsLogin = (state: AppState) => state.global.isLogin
export const { setReady, unsetReady, unsetInitApp } = globalSlice.actions
export const globalReducer = globalSlice.reducer