import { Box, ThemeProvider } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar';
import theme from '../themes/theme';
import NewsSportPage from './NewsSport';

const Sport = () => {
  
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
    <Box sx={{ margin: 1, display: 'flex', flexDirection: 'row'}}>
      <NewsSportPage />
    </Box>
    </ThemeProvider>
  )
}

export default Sport;