import { createAsyncThunk } from "@reduxjs/toolkit";
import getProducts from "../services/getProducts";

export const useGetProducts = createAsyncThunk(
  'service/getProducts',
  async () => {
    const resp = await getProducts()
    return resp.data
  }
)