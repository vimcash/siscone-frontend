import axios from "../../../lib/axios";

export const getProducts = 
  () => axios({
    type: 'GET',
    url: '/api/getProducts'})