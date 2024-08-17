import { axios } from "../../../libs"
import * as env from "../../../data/environments"

const postCompany = 
  (inCompany:any) => axios({
    type: 'POST',
    url: `${env.baseUrl}/company`,
    data: inCompany
  })


export default postCompany