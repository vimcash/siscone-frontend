import { createAsyncThunk } from "@reduxjs/toolkit"
import { getAPIProducts } from "../services/getAPIProducts"

export const useGetProducts = createAsyncThunk(
  'service/getAPIProducts',
  async () => {
    const products = await getAPIProducts()
    return products ? products.data : []
  }
)