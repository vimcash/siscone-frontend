import { createAsyncThunk } from "@reduxjs/toolkit";
import postConfirmPurchase from "../services/postConfirmPurchase";

export const usePostConfirmPurchase = createAsyncThunk(
  'service/postConfirmPurchase',
  async (compraId:string) => {
    console.log(compraId)
    const resp = await postConfirmPurchase(compraId)
    return resp.data
  }
)