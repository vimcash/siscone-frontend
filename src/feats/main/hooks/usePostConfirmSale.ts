import { createAsyncThunk } from "@reduxjs/toolkit";
import postConfirmSale from "../services/postConfirmSale";

export const usePostConfirmSale = createAsyncThunk(
  'service/postConfirmSale',
  async (ventaId:string) => {
    console.log(ventaId)
    const resp = await postConfirmSale(ventaId)
    return resp.data
  }
)