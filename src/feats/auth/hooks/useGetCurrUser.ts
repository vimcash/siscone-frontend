import { createAsyncThunk } from "@reduxjs/toolkit";
import getCurrUser from "../services/getCurrUser";

export const useGetCurrUser = createAsyncThunk(
  'service/getCurrUser',
  async () => {
    const resp = await getCurrUser()
    return resp.data
  }
)