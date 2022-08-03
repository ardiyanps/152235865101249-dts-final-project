import { Box, ThemeProvider } from '@mui/material';
import React from 'react';
import Navbar from '../components/Navbar';
import theme from '../themes/theme';
import NewsCarousel from '../components/NewsCarousel';
import NewsListHealth from './NewsListHealth';
import NewsListScience from './NewsListScience';
import NewsListSport from './NewsListSport';

const Home = () => {
  
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
    <Box sx={{ margin: 1, display: 'flex', flexDirection: 'column'}}>
      <NewsCarousel />
      <h2 style={{marginLeft: 70}}>Sport News</h2>
      <NewsListSport />
      <h2 style={{marginLeft: 70}}>Health News</h2>
      <NewsListHealth />
      <h2 style={{marginLeft: 70}}>Science News</h2>
      <NewsListScience />
    </Box>
    </ThemeProvider>
  )
}

export default Home