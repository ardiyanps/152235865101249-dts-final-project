import Carousel from 'react-elastic-carousel';
import { useEffect, useState } from 'react';

import { newsApiHealth } from '../apis/news';
import NewsCardHealth from '../components/NewsCardHealth';

const NewsListHealth = () => {
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

    console.log(newsHealth);
    return (
            <Carousel itemsToShow={4}>
            {
                    newsHealth.map(article => (
                        <NewsCardHealth key={article.title} article={article}></NewsCardHealth>
                    ))
                }
            </Carousel>
    );
}

export default NewsListHealth;
