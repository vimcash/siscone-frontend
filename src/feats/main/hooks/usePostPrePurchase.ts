import { createAsyncThunk } from "@reduxjs/toolkit";
import postPrePurchase from "../services/postPrePurchase";

export const usePostPrePurchase = createAsyncThunk(
  'service/postPrePurchase',
  async (inPrePurchase:any) => {
    console.log(inPrePurchase)
    const resp = await postPrePurchase(inPrePurchase)
    return resp.data
  }
)