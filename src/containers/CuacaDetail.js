import { useLocation } from 'react-router-dom';
import { Box, ThemeProvider } from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import theme from '../themes/theme';
import Navbar from '../components/Navbar';
import image from '../img/home.png';

const CuacaDetail = () => {

    const {state} = useLocation();
    const { cuaca } = state; 

    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <Box sx={{width: '100%', height: '60vh' , marginTop: 5 , backgroundImage: `url(${image})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>

      </Box>
        <Box sx={{display: "flex" ,justifyContent: 'center', marginTop: 10}}>
        <Card id={cuaca.cuaca} sx={{ display: 'flex', flexDirection: 'row', width: '90%', height: '80%', borderRadius: 10, justifyContent: 'center'}}>

          <Box>
            <Typography sx={{margin: 5, fontSize: '100%'}}>
            <h1>{cuaca.cuaca}</h1>
            </Typography>
            <Typography sx={{margin: 5}}>
            </Typography>
          </Box>
          <Box sx={{bgcolor: 'gray'}}>
            <Typography sx={{margin: 5, fontSize: '100%'}}>
            <h1>{cuaca.tempC}&deg;C</h1>
            </Typography>
          </Box>
          <Box sx={{bgcolor: 'slateblue'}}>
            <Typography sx={{margin: 5, fontSize: '100%'}}>
            <h1>{cuaca.tempF}&deg;F</h1>
            </Typography>
          </Box>
          <Box sx={{bgcolor: 'slategray'}}>
            <Typography sx={{margin: 5, fontSize: '100%'}}>
            <h1>{cuaca.humidity}&deg; Kelembaban</h1> 
            </Typography>
          </Box>
          <Box>
            <Typography sx={{margin: 5, fontSize: '100%'}}>
            <h1>{cuaca.jamCuaca}</h1> 
            </Typography>
          </Box>

        </Card>
        </Box>
        </ThemeProvider>
      );
}

export default CuacaDetail