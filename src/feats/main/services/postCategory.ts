import { axios } from "../../../libs"
import * as env from "../../../data/environments"

const postCategory = 
  (inCategory:any) => axios({
    type: 'POST',
    url: `${env.baseUrl}/category`,
    data: inCategory
  })

export default postCategory