import { axios } from "@/libs"

const getMethod = (url:string) => axios({
  type: 'GET',
  url
})

export default getMethod