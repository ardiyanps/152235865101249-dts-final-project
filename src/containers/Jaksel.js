import { Box, ThemeProvider } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar';
import theme from '../themes/theme';
import CuacaJakselPage from './CuacaJakselPage';
import image from '../img/jaksel.png';

const Jaksel = () => {
  
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Box sx={{width: '100%', height: '60vh' , marginTop: 5 , backgroundImage: `url(${image})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>

</Box>
    <Box sx={{ margin: 1, display: 'flex', flexDirection: 'row', marginTop: 10}}>
      <CuacaJakselPage />
    </Box>
    </ThemeProvider>
  )
}

export default Jaksel;