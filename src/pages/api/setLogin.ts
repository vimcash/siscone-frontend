import type { NextApiHandler } from "next"

const requestType = 'POST'
export const setLogin: NextApiHandler = 
  (req, res) => {
    if(req.method !== requestType)
    {
      res.status(405).send({ message: `Only ${requestType} requests allowed` })
      return
    }
    const { 
      username,
      password
    } = req.body
    if(username=="rgil" && password=="1234567"){
      res.status(200).send({ message: `OK` })
      return 
    }
    res.status(401).send({ message: `Unauthorized` })
  }
export default setLogin