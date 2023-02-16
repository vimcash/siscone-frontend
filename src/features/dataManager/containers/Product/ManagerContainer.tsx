import { useAppSelector } from "../../../../hooks"
import { ManagerFrame } from "../../components/Product/ManagerFrame"
import { selectProduct } from "../../states/productState/productState"

export const ManagerContainer = () => {
  const product = useAppSelector(selectProduct)
  return (
    <div className="">
      <ManagerFrame product={product}/>
    </div>
  )
}