import { Box, ThemeProvider } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar';
import theme from '../themes/theme';
import CuacaJakpusPage from './CuacaJakpusPage';
import image from '../img/jakpus.png';

const Jakpus = () => {
  
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Box sx={{width: '100%', height: '60vh' , marginTop: 5 , backgroundImage: `url(${image})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>

</Box>
    <Box sx={{ margin: 1, display: 'flex', flexDirection: 'row', marginTop: 10}}>
      <CuacaJakpusPage />
    </Box>
    </ThemeProvider>
  )
}

export default Jakpus;