import { createAsyncThunk } from "@reduxjs/toolkit";
import postCategory from "../services/postCategory";

export const usePostCategory = createAsyncThunk(
  'service/postCategory',
  async (inCategory:any) => {
    console.log(inCategory)
    const resp = await postCategory(inCategory)

    return resp.data
  }
)