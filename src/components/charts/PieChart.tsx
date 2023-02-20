import ReactApexChart from "react-apexcharts";
import { Box, Typography, Stack } from "@mui/material";

import { PieChartProps } from "../../interfaces/dashboard";
import { Directions, Padding } from "@mui/icons-material";

export const PieChart = ({ title, value, series, colors}: PieChartProps) => {
  return (
    <Box
      className="ml-6"
      id="chart"
      flex={1}
      display="flex"
      bgcolor="#fcfcfc"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      pl={3.5}
      py={2}
      gap={5}
      borderRadius="15px"
      minHeight="110px"
      sx={{width: {xs: "150px", md: "fit-content"}}}
    >
      <Stack direction="column">
        <Typography fontSize={14} color="#808191">
          {title}
        </Typography>
        <Typography fontSize={24} fontWeight={700} color="#11142d" mt={1}>
          {value}
        </Typography>
      </Stack>
      
      <ReactApexChart
        options={{
        chart: { type: "donut" },
        colors,
        legend: { show: false },
        dataLabels: { enabled: false },
        }}
        series={series}
        type="donut"
        width="120px"
        />
    </Box>
  )
}

export default PieChart