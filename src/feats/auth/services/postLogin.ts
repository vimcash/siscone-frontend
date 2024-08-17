import { axios } from "../../../libs"
import * as env from "../../../data/environments"

const postAPILogin = 
  (inUser:any) => axios({
    type: 'POST',
    url: `${env.baseUrl}/user/login`,
    data: inUser
  })


export default postAPILogin