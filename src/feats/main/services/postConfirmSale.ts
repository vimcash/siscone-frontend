import { axios } from "../../../libs"
import * as env from "../../../data/environments"

const postConfirmSale = 
  (ventaId:string) => axios({
    type: 'POST',
    url: `${env.baseUrl}/sale/confirm-sale`,
    data: {ventaId}
  })


export default postConfirmSale