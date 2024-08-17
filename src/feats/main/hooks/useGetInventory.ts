import { createAsyncThunk } from "@reduxjs/toolkit";
import getMethod from "@/services/getMethod";
import { baseUrl } from "@/data/environments";

export const useGetInventory = createAsyncThunk(
  'service/getInventory',
  async () => {
    const resp = await getMethod(`${baseUrl}/warehouse/all-warehouse-detail`)
    return resp.data
  }
)