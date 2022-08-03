import { Box, CardMedia, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const NewsCard = ({article}) => {
  const navigate = useNavigate();
  const onDetail = () => {
    navigate('/detail',{state:{article}});
  }

  // const notFound = 'https://cdn3d.iconscout.com/3d/premium/thumb/404-error-4461124-3696774.png';
  // let urlImage = article.urlToImage;
  // if (urlImage === null) {
  //   urlImage = notFound
  // }

  return (
        <Box>
        <Card sx={{ display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            margin: 1,
            justifyContent: 'space-between',
            mt: 5,
            width: 250, borderRadius: 5, backgroundColor: '#fff9b2'}} onClick={() => onDetail()}>
        <CardMedia
          component="img"
          height="200"
          // image={urlImage}
          alt="News Poster"
        />
        <Typography sx={{margin: 2, height: 150}}>
          <h4>{article.title}</h4>
        </Typography>
      </Card>
      </Box>
  );
}

export default NewsCard;