import { createAsyncThunk } from "@reduxjs/toolkit";
import postPreSale from "../services/postPreSale";

export const usePostPreSale = createAsyncThunk(
  'service/postPreSale',
  async (inPreSale:any) => {
    console.log(inPreSale)
    const resp = await postPreSale(inPreSale)
    return resp.data
  }
)