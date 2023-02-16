import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import { AppState } from "../../../../data/store/types"
import { usePostAPILogin } from "../../hooks/usePostAPILogin"
import { actions } from "./actions"

const initialState = {
  username: "",
  password: "",
  status: "idle"
}

const loginState = createSlice({
  name: "login",
  initialState,
  reducers: actions,
  extraReducers(builder){
    builder
      .addCase(usePostAPILogin.pending, (state) => {
        state.status = "loading"
      })
      .addCase(usePostAPILogin.rejected, (state) => {
        state.status = "failed"
        toast.error("Ups! Algo salio mal")
      })
      .addCase(usePostAPILogin.fulfilled, (state, action) => {
        state.status = "idle"
        if(!action.payload){
          toast.error("Ups! Algo salio mal")
          return
        }
        toast.success("Success!!")
      })
  }
})

export const { setUsename, setPassword } = loginState.actions
export const selectLogin = (state:AppState) => state.login

export const loginReducer = loginState.reducer