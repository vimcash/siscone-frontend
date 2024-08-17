import { axios } from "../../../libs"
import * as env from "../../../data/environments"

const postProduct = 
  (inProduct:any) => axios({
    type: 'POST',
    url: `${env.baseUrl}/product`,
    data: inProduct
  })


export default postProduct