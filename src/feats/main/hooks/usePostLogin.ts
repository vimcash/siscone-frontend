import { createAsyncThunk } from "@reduxjs/toolkit";
import postLogin from "../services/postLogin";

export const usePostLogin = createAsyncThunk(
  'service/postAPILogin',
  async (inUser:any) => {
    const resp = await postLogin(inUser)
    return resp.data
  }
)