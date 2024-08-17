import { axios } from "../../../libs";
import * as env from "../../../data/environments"

const getCurrUser = 
  () => axios({
    type: 'GET',
    url: `${env.baseUrl}/company/vimsolutions`
  })

export default getCurrUser