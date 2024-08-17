import { createAsyncThunk } from "@reduxjs/toolkit";
import postProduct from "../services/postProduct";
import postPriceManager from "../services/postPriceManager";

export const usePostProduct = createAsyncThunk(
  'service/postProduct',
  async (inProduct:any) => {
    console.log(inProduct)
    const resp = await postProduct(inProduct)
    if(inProduct.priceSell)
      await postPriceManager({product: resp.data._id, price: Number(inProduct.priceSell), isDefault: true})
    if(inProduct.priceBuy)
      await postPriceManager({product: resp.data._id, price: Number(inProduct.priceBuy), isDefault: true}, false)

    return resp.data
  }
)