import { Box, CardMedia, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';


const NewsCardCarousel = ({article}) => {
  const navigate = useNavigate();
  const onDetail = () => {
    navigate('/detail',{state:{article}});
  }
  return (
        <Box sx={{marginTop: 5}}>
        <Card sx={{display: "flex", width: '100%', height: 400, marginTop: 5, backgroundColor: '#fff9b2', borderRadius: 10 }} onClick={() => onDetail()}>
        <CardMedia
        sx={{width:350, height:400, marginBottom: 10, borderTopRightRadius: 50}}
          component="img"
          height="350"
          width="350"
          image={article.urlToImage}
          alt="News Poster"
        />
        <Typography sx={{margin: 5}}>
        <h2>"{article.title}"</h2>
          <h3>{article.description}</h3>
            <br/>
            <br/>
          <h4>Author : {article.author}</h4>
          <h4>Published : {new Date(article.publishedAt).getDate()}
          .{new Date(article.publishedAt).getMonth()}
          .{new Date(article.publishedAt).getFullYear()}
          </h4>
          Baca selengkapnya ...
        </Typography>
      </Card>
      </Box>
  );
}

export default NewsCardCarousel;