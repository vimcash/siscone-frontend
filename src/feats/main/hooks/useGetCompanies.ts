import { createAsyncThunk } from "@reduxjs/toolkit";
import getCompanies from "../services/getCompanies";

export const useGetCompanies = createAsyncThunk(
  'service/getCompanies',
  async () => {
    const resp = await getCompanies()
    return resp.data
  }
)