import axios from "../../../lib/axios";

const postAPILogin =
  (inUser) => axios({
    type: 'POST',
    url: '/api/setLogin',
    data: inUser})


export default postAPILogin