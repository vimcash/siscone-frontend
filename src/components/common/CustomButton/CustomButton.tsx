import React from 'react'
import Button from '@mui/material/Button';

import { CustomButtonProps } from '../../../interfaces/common';


export const CustomButton = ({type, title, backgroundColor, 
    color, fullWidth, icon, handleClick}: CustomButtonProps) => {
    return (
      <div className="bg-ligth-purple rounded-lg">
        <Button sx={{
          flex: fullWidth ? 1 : 'unset',
          padding: {xs: '10px 10px', lg:'10px 15px'},
          width: fullWidth ? '100%' : 'fit-content',
          minWidth: 130,
          backgroundColor,
          color,
          fontSize: {xs:14, lg:16},
          fontWeight: 600,
          gap: {xs:'5px', lg:'10px'},
          textTransform: 'capitalize',
          '&:hover': {
            opacity: 0.9,
            backgroundColor
          }
        }}
        onClick={handleClick}
        >
          {icon}
          {title}
        </Button>
      </div>
      )
}

export default CustomButton