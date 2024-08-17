import { createAsyncThunk } from "@reduxjs/toolkit";
import postUnitMesure from "../services/postUnitMesure";

export const usePostUnitMesure = createAsyncThunk(
  'service/postUnitMesure',
  async (inUnitMesure:any) => {
    console.log('unitMesure', inUnitMesure)
    const resp = await postUnitMesure(inUnitMesure)

    return resp.data
  }
)