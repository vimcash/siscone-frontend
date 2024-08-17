import { PayloadAction } from "@reduxjs/toolkit"

const actions = {
  hidePopup: (state:any) => {
    state.popupType = "none"
  },
  showPopupType: (state:any, {payload}:PayloadAction<string>) => {
    state.popupType = payload
  }
}



export default actions