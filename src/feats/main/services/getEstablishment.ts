import { axios } from "../../../libs";
import * as env from "../../../data/environments"

const getEstablishment = 
  () => axios({
    type: 'GET',
    url: `${env.baseUrl}/establishment`
  })

export default getEstablishment