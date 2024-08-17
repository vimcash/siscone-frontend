import { axios } from "../../../libs";
import * as env from "../../../data/environments"

const getProducts = 
  () => axios({
    type: 'GET',
    url: `${env.baseUrl}/product`
  })

export default getProducts