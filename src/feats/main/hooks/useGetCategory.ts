import { createAsyncThunk } from "@reduxjs/toolkit";
import getCategory from "../services/getCategory";

export const useGetCategory = createAsyncThunk(
  'service/getCategories',
  async () => {
    const resp = await getCategory()
    return resp.data
  }
)