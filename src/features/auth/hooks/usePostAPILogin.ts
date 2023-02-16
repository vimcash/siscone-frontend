import { createAsyncThunk } from "@reduxjs/toolkit";
import postAPILogin from "../services/postAPILogin";

export const usePostAPILogin = createAsyncThunk(
  'service/postAPILogin',
  async (inUser:any) => {
    const user:any = await postAPILogin(inUser)
    return user
  }
)