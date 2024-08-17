import { createAsyncThunk } from "@reduxjs/toolkit";
import getWarehouseInventory from "../services/getWarehouseInventory";

export const useGetWarehouseInventory = createAsyncThunk(
  'service/getWarehouseInventory',
  async (warehouseId: string) => {
    const resp = await getWarehouseInventory(warehouseId)
    return resp.data
  }
)