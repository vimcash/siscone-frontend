import axios from "../../../lib/axios";

export const getAPIProducts = 
  () => axios({
    type: 'GET',
    url: 'http://localhost:3000/api/products'
})