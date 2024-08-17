import { createAsyncThunk } from "@reduxjs/toolkit";
import postPriceManager from "../services/postPriceManager";
import postCompany from "../services/postCompany";

export const usePostCompany = createAsyncThunk(
  'service/postCompany',
  async (inProduct:any) => {
    console.log(inProduct)
    const resp = await postCompany(inProduct)
    return resp.data
  }
)