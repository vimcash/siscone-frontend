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
      products: data
      .map((product) => {
        return product || null
      })
      .flat(1)
      .filter((product) => {
        return product !== null
      }),
    },
    revalidate: 60,
  }
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const AllProducts: NextPage = (props: any) => {
  console.log(props.products)
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
          rows={rows}
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