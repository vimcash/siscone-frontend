import { createSlice } from "@reduxjs/toolkit"
import actions from "./actions"
import { AppState } from "@/data/store/types"

const initialState = {
  popupType: "none"
}

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: actions
})

export const {
  hidePopup,
  showPopupType
} = popupSlice.actions
export const selectPopupType = (state: AppState) => state.popup.popupType
export const popupReducer = popupSlice.reducer