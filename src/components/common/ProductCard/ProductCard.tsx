import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import { Box, Stack } from '@mui/material';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { PieChart, TotalRevenue } from '../../charts';


export const ProductCard = () => {

  return (
    <Card sx={{ maxWidth: 1200, maxHeight: 1200, display: "flex" }} style={{backgroundColor: "#E5E5E5"}}>
      <CardContent sx={{ flex: '1 auto'}}>
        <Stack sx={{}}>
        <Typography variant="h5" component="div">
          Lata
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          27-2-2023
        </Typography>
          
          <CardMedia
            component="img"
            sx={{ width: 151, flexDirection: "row-reverse"}}
            image="https://lafamosa.com/wp-content/uploads/2016/11/tomates-pelados-y-picados-15oz.jpg"
            alt="Paella dish"
          />
        </Stack>

        <Box mt="20px" flexWrap="wrap" gap={2} width="98%" sx={{ display: "flex"}}>
        <PieChart 
          title="Ventas del Producto"
          value={684}
          series={[75, 25]}
          colors={['#475be8', '#e4e8ef']}
        />

        <PieChart
          title="Productos en Almacen"
          value={550}
          series={[60, 40]}
          colors={['#FD8539', '#e4e8ef']}
        />
        </Box>
        
        <Stack mt="25px" width="98%" direction={{xs: 'column', lg: 'row',}} gap={4} mb={2}>
          <TotalRevenue />
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ProductCard;