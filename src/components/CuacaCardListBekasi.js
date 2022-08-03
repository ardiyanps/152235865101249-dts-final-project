import { Box, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const CuacaCardListBekasi = ({cuaca}) => {
  const navigate = useNavigate();
  const onDetail = () => {
    navigate('/detail',{state:{cuaca}});
  }

  return (
        <Box>
        <Card sx={{ display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            margin: 1,
            justifyContent: 'space-between',
            mt: 1,
            width: 250, borderRadius: 5, backgroundColor: '#fff9b2'}} onClick={() => onDetail()}>
        <Typography sx={{margin: 2, height: 250, justifyContent: 'center'}}>
          <center><h1>{cuaca.cuaca}</h1>
          <h2 style={{fontSize: '300%', color: 'slateblue' }}>{cuaca.tempC}&deg;C</h2>
          <h4>{cuaca.jamCuaca}</h4>
          </center>
        </Typography>
      </Card>
      </Box>
  );
}

export default CuacaCardListBekasi;