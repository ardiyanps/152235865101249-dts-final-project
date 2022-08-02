import { useEffect, useState } from 'react';

import { newsApiHealth } from '../apis/news';
import { Box } from '@mui/material';
import NewsCard from '../components/NewsCard';

const NewsHealthPage = () => {
    const [newsHealth, setNewsHealth] = useState([]);

    useEffect(() => {
        const fetchNewsHealth = async () => {
            try {
                const fetchedNews = await newsApiHealth.get();
                setNewsHealth(fetchedNews.data.articles);
            } catch (error) {
                console.log(error);
            }
        }

        fetchNewsHealth();
    }, []);

    return (
            <Box sx={{ display: 'flex',
            flexDirection: 'row',
            width: '100%',
            flexWrap: 'wrap',
            mt: 5}}>
            {
                    newsHealth.map(article => (
                        <NewsCard key={article.title} article={article}></NewsCard>
                    ))
                }
            </Box>
    );
}

export default NewsHealthPage;
