import { Box, typography, Stack } from "@mui/system"
import { NextPage } from "next"
import { Typography } from "@mui/material"

import { PieChart, TotalRevenue, ProductReferrals } from '../components/charts/index'

const Dashboard: NextPage = () => {
  return (
    <Box mb={16} flex={1}>
    <Typography fontSize={25} fontWeight={700} color="#11142D" mt={9}>
      Dashboard
    </Typography>

    <Box mt="20px" display="flex" flexWrap="wrap" gap={2} width="98%" sx={{
      flexDirection: {xs: "row"},
      marginLeft: {xs: -3, sm:0}
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

    <Stack mt="25px" width="98%" direction={{xs: 'column', lg: 'row',}} gap={4} sx={{marginLeft: {xs: -3, sm: 0}}}>
      <TotalRevenue />
      <ProductReferrals />
    </Stack>
  </Box>
  )
}


export default Dashboard