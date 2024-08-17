import { AnyInterface } from "@/data/interface"
interface Item extends AnyInterface {}
interface Response extends AnyInterface {}

export const groupBy = (array:Item[], key:string) => {
  const response:Response[] = []
  array.map((item:Item) => {
    const value = item[key]
    if(!response.find(res => res.key == value))
      response.push({key: value, data: array.filter(item => item[key] == value)})
  })
  
  return response
}