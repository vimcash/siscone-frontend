import { createSlice } from "@reduxjs/toolkit"
import { AppState } from "@/data/store/types"
import actions from "./action"
import { useGetCompanies } from "../hooks/useGetCompanies"
import { usePostCompany } from "../hooks/usePostCompany"

const initialState = {
  companyList: [],
  companyListFilter: [],
  search: "",
  currentCompany: {
    rnc: "",
    name: "",
    owner: "",
    description: "",
    subname: "",
    keycloakClientId: "",
    email: "",
    address: "",
  }
}

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: actions.company,
  extraReducers(builder) {
      builder
        .addCase(useGetCompanies.fulfilled, (state, {payload}) => {
          state.search = "",
          state.companyList = payload
          state.companyListFilter = payload
          console.log(payload)
        })
        .addCase(useGetCompanies.rejected, (state, {error}) => {
          console.error(error)
        })
        .addCase(usePostCompany.fulfilled, (state, {payload}) => {
          console.log(payload)
        })
        .addCase(usePostCompany.rejected, (state, {error}) => {
          console.error(error)
        })
  },
})


export const selectFilterCompany = (state:AppState) => state.company.companyListFilter
export const selectCurrentCompany = (state:AppState) => state.company.currentCompany
export const {
  setCompanyId, 
  setCompanyName, 
  setCompanyOwner,
  setCompanyEstablishmentSubname,
  setCompanyEstablishment,
  setCompanyAddress,
  setCompanyEmail,
  setCompanyKeycloakClientId
} = companySlice.actions
export const companyReducer = companySlice.reducer