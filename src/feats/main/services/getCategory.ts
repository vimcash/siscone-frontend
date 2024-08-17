import { axios } from "../../../libs";
import * as env from "../../../data/environments"

const getCategory = 
  () => axios({
    type: 'GET',
    url: `${env.baseUrl}/category`
  })

export default getCategory