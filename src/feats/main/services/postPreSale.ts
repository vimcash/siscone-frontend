import { axios } from "../../../libs"
import * as env from "../../../data/environments"

const postPrePurchase = 
  (inPurchase:any) => axios({
    type: 'POST',
    url: `${env.baseUrl}/sale/pre-sale`,
    data: {...inPurchase}
  })


export default postPrePurchase