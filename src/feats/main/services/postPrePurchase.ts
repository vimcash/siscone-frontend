import { axios } from "../../../libs"
import * as env from "../../../data/environments"

const postPrePurchase = 
  (inPurchase:any) => axios({
    type: 'POST',
    url: `${env.baseUrl}/purchase/pre-purchase`,
    data: {...inPurchase}
  })


export default postPrePurchase