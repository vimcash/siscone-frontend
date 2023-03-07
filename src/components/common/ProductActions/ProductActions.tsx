import React from 'react'
import { Box, IconButton, Tooltip } from '@mui/material'
import { Delete, Edit, Preview } from '@mui/icons-material'

export const ProductActions = ({ params }) => {
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
            <IconButton onClick={() => {}}>
                <Delete />
            </IconButton>
        </Tooltip>
    </Box>
  )
}

export default ProductActions