import { GetStaticProps, NextPage } from 'next/types'
import React, { useState } from 'react'
import { Add } from "@mui/icons-material";
import { Box, Stack, Typography, Avatar } from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import moment from 'moment';

import { CustomButton } from "../components/common/CustomButton";
import Link from 'next/link';
import { getProducts } from './api/products';

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
  {
    field: 'createdAt',
    headerName: 'Fecha',
    width: 120,
    editable: false,
    renderCell: params =>moment(params.row.createdAt).format('YYYY-MM-DD')
  },
  {
    field: 'photo',
    headerName: 'Foto',
    width: 60,
    editable: false,
    sortable: false,
    filterable: false,
    renderCell: (params) => <Avatar  src={params.row.photo} />
  },
];


const AllProducts: NextPage = (props: any) => {
  const [pageSize, setPageSize] = useState(5)
  return (
    <Box mt={8} mb={16}>
      <Stack direction="row"
      sx={{
        gap: {xs:2, md: 52, lg: 95, xl: 140},
        mt: { md:2 , lg: 4},
        ml: {xs:-2, lg: 1},
      }}
      justifyContent="space-between"
      alignItems="center">
          <Typography fontSize={25} fontWeight={700} color="#11142d">
            Productos
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
      
      <Box bgcolor="#fcfcfc" sx={{ height: 400, width: '100%', mt: 4, flex: 1}}>
        <DataGrid
          rows={props.products}
          columns={columns}
          pageSize={pageSize}
          rowsPerPageOptions={[5, 10, 20]}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          getRowSpacing={params=> ({
            top: params.isFirstVisible ? 0 : 3,
            bottom: params.isLastVisible ? 0 : 3,
          })}
        />
      </Box>
    </Box>
  )
}

export default AllProducts