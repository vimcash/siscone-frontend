import { axios } from "../../../libs";
import * as env from "../../../data/environments"

const getCompany = 
  () => axios({
    type: 'GET',
    url: `${env.baseUrl}/company`
  })

export default getCompany