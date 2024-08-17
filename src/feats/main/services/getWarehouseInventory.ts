import { axios } from "../../../libs";
import * as env from "../../../data/environments"

const getWarehouseInventory = 
  (warehouseId: string) => axios({
    type: 'GET',
    url: `${env.baseUrl}/warehouse/warehouse-details/${warehouseId}`
  })

export default getWarehouseInventory