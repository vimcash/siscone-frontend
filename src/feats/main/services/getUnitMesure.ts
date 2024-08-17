import { axios } from "../../../libs";
import * as env from "../../../data/environments"

const getUnitMesure = 
  () => axios({
    type: 'GET',
    url: `${env.baseUrl}/unit-measure`
  })

export default getUnitMesure