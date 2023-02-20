import { Box, Stack, Typography } from '@mui/material';

import { productReferralsInfo } from '../../assets/index';
import ProgressBar from '../../features/progresBar/components/ProgresBar';

export const ProductReferrals = () => {
  return (
    <Box
      marginLeft={3}
      p={4}
      bgcolor="#fcfcfc"
      id="chart"
      sx={{minWidth:{
        md: 490
      }}}
      display="flex"
      flexDirection="column"
      borderRadius="15px"
    >
      <Typography fontSize={18} fontWeight={600} color="#11142d">
        Referencias de Productos
      </Typography>

      <Stack my="20px" direction="column" gap={4}>
        {productReferralsInfo.map((bar) => 
        <ProgressBar key={bar.title} {...bar}/>)}
      </Stack>
    </Box>
  )
}

export default ProductReferrals