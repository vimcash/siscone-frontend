import { Table } from "../../../../components/ui/Table/Table"

export const ManagerFrame = ({product}) => {
  const { products } = product
  return (
    <div className="">
      <Table dataSource={products} titles={["Producto","Categoria","Precio"]} />
    </div>
  )
}