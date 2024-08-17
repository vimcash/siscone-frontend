import { axios } from "../../../libs"
import * as env from "../../../data/environments"

const postPriceManager = 
  (inPrice:any, isSale=true) => axios({
    type: 'POST',
    url: `${env.baseUrl}/price-manager`,
    data: {...inPrice, priceType: isSale ? 'sale' : 'purchase'}
  })


export default postPriceManager