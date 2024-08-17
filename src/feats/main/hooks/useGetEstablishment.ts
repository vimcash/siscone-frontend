import { createAsyncThunk } from "@reduxjs/toolkit";
import getEstablishment from "../services/getEstablishment";

export const useGetEstablishment = createAsyncThunk(
  'service/getEstablishment',
  async () => {
    const resp = await getEstablishment()
    return resp.data
  }
)