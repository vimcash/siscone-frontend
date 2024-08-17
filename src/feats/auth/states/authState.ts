import { createSlice } from "@reduxjs/toolkit"
import actions from "./action"
import { AppState } from "@/data/store/types"
import { usePostLogin } from "../hooks/usePostLogin"
import { useGetCurrUser } from "../hooks/useGetCurrUser"
import LocalStorage from "@/libs/localStorage"

const initialState = {
  login: {
    username: "",
    password: ""
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: actions,
  extraReducers(builder) {
    builder
      .addCase(usePostLogin.fulfilled, (state, {payload}) => {
        console.log(payload)
        LocalStorage.set('username', state.login.username)
        LocalStorage.set(`${state.login.username}|currUser`, payload.Authorization)
      })
      .addCase(usePostLogin.rejected, ({}, {error}) =>{
        console.error(error)
      })
      .addCase(useGetCurrUser.fulfilled, (state, {payload}) => {
        console.log(payload)
      })
      .addCase(useGetCurrUser.rejected, ({}, {error}) =>{
        console.error(error)
      })
  },
})

export const selectLogin = (state: AppState) => state.auth.login
export const { setLoginPassword, setLoginUsername } = authSlice.actions
export const authReducer = authSlice.reducer