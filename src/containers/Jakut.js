import { Box, ThemeProvider } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar';
import theme from '../themes/theme';
import CuacaJakutPage from './CuacaJakutPage';
import image from '../img/jakut.png';

const Jakut = () => {
  
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Box sx={{width: '100%', height: '60vh' , marginTop: 5 , backgroundImage: `url(${image})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>

</Box>
    <Box sx={{ margin: 1, display: 'flex', flexDirection: 'row', marginTop: 10}}>
      <CuacaJakutPage />
    </Box>
    </ThemeProvider>
  )
}

export default Jakut;