import { Box, ThemeProvider } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar';
import theme from '../themes/theme';
import NewsSciencePage from './NewsScience';

const Science = () => {
  
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
    <Box sx={{ margin: 1, display: 'flex', flexDirection: 'row'}}>
      <NewsSciencePage />
    </Box>
    </ThemeProvider>
  )
}

export default Science;