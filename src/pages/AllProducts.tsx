import { GetStaticProps, NextPage } from 'next/types'
import React from 'react'
import { Add } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import { CustomButton } from "../components/common/CustomButton";
import { ProductDataGrid } from '../components/common/Datagrid';
import Link from 'next/link';
import { getProducts } from './api/products';
import { Container } from '@mui/system';

export const getStaticProps : GetStaticProps = async () => {
  const data = await getProducts()
  return {
    props: {
      products: data.map(pro => ({...pro, id: pro._id.toString(), _id: pro._id.toString()}))
    },
    revalidate: 60,
  }
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'title',
    headerName: 'Producto',
    width: 150,
    editable: true,
  },
  {
    field: 'productType',
    headerName: 'Categoria',
    width: 150,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Precio',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'Descripcion',
    width: 160,
    editable: true,
  },
];


const AllProducts: NextPage = (props: any) => {
  return (
    <Box>
      <Stack direction="row"
      mt={2}
      ml={1}
      sx={{
        gap: {lg: 140}
      }}
      justifyContent="space-between"
      alignItems="center">
          <Typography fontSize={25} fontWeight={700} color="#11142d">
            Todos los Productos
          </Typography>
          <Link href="/CreateProducts">
          <CustomButton 
            title="Agregar Producto"
            backgroundColor="#475be8"
            color="#fcfcfc"
            icon={<Add />}
          />
          </Link>
      </Stack>
      
    <Container>
      <Box bgcolor="#fcfcfc" sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={props.products}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </Container>
    </Box>
  )
}

export default AllProducts