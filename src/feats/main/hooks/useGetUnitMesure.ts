import { createAsyncThunk } from "@reduxjs/toolkit";
import getUnitMesure from "../services/getUnitMesure";

export const useGetUnitMesure = createAsyncThunk(
  'service/getUnitMesure',
  async () => {
    const resp = await getUnitMesure()
    return resp.data
  }
)