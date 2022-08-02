import { useLocation } from 'react-router-dom';
import { Box, CardMedia, Link, ThemeProvider } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import theme from '../themes/theme';
import Navbar from '../components/Navbar';

const NewsDetail = () => {

    const {state} = useLocation();
    const { article } = state; 
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
        <Box sx={{display: "flex" ,justifyContent: 'center', marginTop: 10}}>
        <Card id={article.title} sx={{ display: 'flex', width: '90%', height: '80%', borderRadius: 10}}>
        <CardMedia
        sx={{width:500, height:700, borderTopRightRadius: 50}}
          component="img"
          height="500"
          width="300"
          image={article.urlToImage}
          alt="News Poster"
        />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography sx={{margin: 5}}>
        <h2>"{article.title}"</h2>
          <h3>{article.description}</h3>
          {article.content}
            <br/>
            <br/>
          <h4>Author : {article.author}</h4>
          <h4>Published : {new Date(article.publishedAt).getDate()}
          .{new Date(article.publishedAt).getMonth()}
          .{new Date(article.publishedAt).getFullYear()}
          </h4>
          <br/>
          <h4>Baca selengkapnya ... </h4> 
          <Link>{article.url}</Link> 
        </Typography>
            </CardContent>
          </Box>
        </Card>
        </Box>
        </ThemeProvider>
      );
}

export default NewsDetail