import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import * as React from 'react';



const Footer = () => {


    return (
        <Box sx={{ display: 'flex', width: '100%', height: 40, bgcolor: '#37474f', justifyContent: 'center', textAlign: 'center' }}>
            <Typography sx={{margin: 1, color: 'white' }}>Copyright &copy; Ardiyan puji santoso</Typography>
        </Box >
    );
}

export default Footer;
