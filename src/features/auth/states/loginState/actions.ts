import { PayloadAction } from "@reduxjs/toolkit";

export const actions = {
  setUsename: (state, {payload}:PayloadAction<string>) => {
    state.username = payload
  },
  setPassword: (state, {payload}:PayloadAction<string>) => {
    state.password = payload
  }
}