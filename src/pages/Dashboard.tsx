import { Box, typography, Stack } from "@mui/system"
import { NextPage } from "next"
import { Typography } from "@mui/material"

import { PieChart, TotalRevenue, ProductReferrals } from '../components/charts/index'

const Dashboard: NextPage = () => {
  return (
    <Box className="w-screen">
    <Typography fontSize={25} fontWeight={700} color="#11142D" className="mt-4 ml-6">
      Dashboard
    </Typography>

    <Box mt="20px" display="flex" flexWrap="wrap" sx={{
      gap: {xs:2, sm: 2, md: 6, lg: 2},
      marginRight: {xs:6.5, sm:3, md:10, lg: 20}
    }}>
      <PieChart 
        title="Productos en ventas"
        value={684}
        series={[75, 25]}
        colors={['#475be8', '#e4e8ef']}
      />

      <PieChart
        title="Productos en Stock"
        value={550}
        series={[60, 40]}
        colors={['#FD8539', '#e4e8ef']}
      />

      <PieChart 
        title="Clientes Totales"
        value={5804}
        series={[75, 25]}
        colors={['#2ED480', '#e4e8ef']}
      />

      <PieChart 
        title="Productos por sucursal"
        value={17000}
        series={[75, 25]}
        colors={['#FE6D8E', '#e4e8ef']}
      />
    </Box>

    <Stack mt="25px" width="90%" direction={{xs: 'column', lg: 'row' }} gap={4}>
      <TotalRevenue />
      <ProductReferrals />
    </Stack>
  </Box>
  )
}


export default Dashboard