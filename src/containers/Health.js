import { Box, ThemeProvider } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar';
import theme from '../themes/theme';
import NewsHealthPage from './NewsHealth';

const Health = () => {
  
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
    <Box sx={{ margin: 1, display: 'flex', flexDirection: 'row'}}>
      <NewsHealthPage />
    </Box>
    </ThemeProvider>
  )
}

export default Health;