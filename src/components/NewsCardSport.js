import { Box, CardMedia, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const NewsCardSport = ({article}) => {
  const navigate = useNavigate();
  const onDetail = () => {
    navigate('/detail',{state:{article}});
  }

//   let urlImage = article.urlToImage;
//   if (urlImage === null) {
//     urlImage = 'https://cdn3d.iconscout.com/3d/premium/thumb/404-error-4461124-3696774.png'
//   }
  return (
        <Box sx={{width: '80%'}}>
        <Card sx={{ maxWidth: 500, borderRadius: 5, backgroundColor: '#fff9b2', mt: 4 }} onClick={() => onDetail()}>
        <CardMedia
          component="img"
          height="200"
        //   image={urlImage}
          alt="News Poster"
        />
        <Typography sx={{margin: 2, height: 100}}>
          <h4>{article.title}</h4>
        </Typography>
      </Card>
      </Box>
  );
}

export default NewsCardSport;