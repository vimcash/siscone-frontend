import React, {useState} from 'react'
import { Box, IconButton, Tooltip } from '@mui/material'
import { Delete, Edit, Preview } from '@mui/icons-material'
import { useAppDispatch } from '../../../hooks'
import { deleteProduct, setProductDetails } from '../../../features/dataManager/states/productState/productState'
import { ProductPopup } from '../ProductPopup'
import { ProductCard } from '../ProductCard'

export const ProductActions = ({ params }) => {
    const [open, setOpen] = useState(false)
  const dispatch = useAppDispatch();
  return (
    <>
    <Box>
        <Tooltip title="Detalles del Producto">
            <IconButton onClick={() => setOpen(true)}>
                <Preview />
            </IconButton>
        </Tooltip>

        <Tooltip title="Editar Producto">
            <IconButton onClick={() => {}}>
                <Edit />
            </IconButton>
        </Tooltip>

        <Tooltip title="Eliminar Producto">
            <IconButton onClick={() => dispatch(deleteProduct(params.row._id))}>
                <Delete />
            </IconButton>
        </Tooltip>
    </Box>
    <ProductPopup open={open} setOpen={setOpen}>
        <ProductCard />
    </ProductPopup>
    </>
  )
}

export default ProductActions