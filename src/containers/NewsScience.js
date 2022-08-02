import { useEffect, useState } from 'react';
import { newsApiScience } from '../apis/news';
import { Box } from '@mui/material';
import NewsCard from '../components/NewsCard';

const NewsSciencePage = () => {
    const [newsScience, setNewsScience] = useState([]);

    useEffect(() => {
        const fetchNewsScience = async () => {
            try {
                const fetchedNews = await newsApiScience.get();
                setNewsScience(fetchedNews.data.articles);
            } catch (error) {
                console.log(error);
            }
        }

        fetchNewsScience();
    }, []);

    return (
            <Box sx={{ display: 'flex',
            flexDirection: 'row',
            width: '100%',
            flexWrap: 'wrap',
            mt: 5}}>
            {
                    newsScience.map(article => (
                        <NewsCard key={article.title} article={article}></NewsCard>
                    ))
                }
            </Box>
    );
}

export default NewsSciencePage;
