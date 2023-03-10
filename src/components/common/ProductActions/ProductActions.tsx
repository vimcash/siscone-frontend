import React from 'react'
import { Box, IconButton, Tooltip } from '@mui/material'
import { Delete, Edit, Preview } from '@mui/icons-material'
import { useAppDispatch } from '../../../hooks'
import { deleteProduct } from '../../../features/dataManager/states/productState/productState'

export const ProductActions = ({ params }) => {
  const dispatch = useAppDispatch()
  return (
    <Box>
        <Tooltip title="Detalles del Producto">
            <IconButton onClick={() => {}}>
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
  )
}

export default ProductActions