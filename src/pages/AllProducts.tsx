import { NextPage } from 'next'
import React from 'react'
import { Add } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

import { CustomButton } from "../components/common/CustomButton";
import Link from 'next/link';

const AllProducts: NextPage = () => {
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
    </Box>
  )
}
export default AllProducts