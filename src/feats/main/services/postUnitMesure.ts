import { axios } from "../../../libs"
import * as env from "../../../data/environments"

const postUnitMesure = 
  (inCategory:any) => axios({
    type: 'POST',
    url: `${env.baseUrl}/unit-measure`,
    data: inCategory
  })

export default postUnitMesure