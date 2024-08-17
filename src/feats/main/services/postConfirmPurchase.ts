import { axios } from "../../../libs"
import * as env from "../../../data/environments"

const postConfirmPurchase = 
  (compraId:string) => axios({
    type: 'POST',
    url: `${env.baseUrl}/purchase/confirm-purchase`,
    data: {compraId}
  })


export default postConfirmPurchase