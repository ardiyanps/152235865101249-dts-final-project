import { useEffect, useState } from 'react';
import { newsApiSport } from '../apis/news';
import { Box } from '@mui/material';
import NewsCard from '../components/NewsCard';

const NewsSportPage = () => {
    const [newsSport, setNewsSport] = useState([]);

    useEffect(() => {
        const fetchNewsSport = async () => {
            try {
                const fetchedNews = await newsApiSport.get();
                setNewsSport(fetchedNews.data.articles);
            } catch (error) {
                console.log(error);
            }
        }

        fetchNewsSport();
    }, []);

    return (
            <Box sx={{ display: 'flex',
            flexDirection: 'row',
            width: '100%',
            flexWrap: 'wrap',
            mt: 5}}>
            {
                    newsSport.map(article => (
                        <NewsCard key={article.title} article={article}></NewsCard>
                    ))
                }
            </Box>
    );
}

export default NewsSportPage;
