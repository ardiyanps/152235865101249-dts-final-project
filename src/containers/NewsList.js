import Carousel from 'react-elastic-carousel';
import { useEffect, useState } from 'react';
import newsApiHealth from '../apis/newsHealth';
import NewsCard from '../components/NewsCard';

const NewsList = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const fetchedNews = await newsApiHealth.get();
                setNews(fetchedNews.data.articles);
            } catch (error) {
                console.log(error);
            }
        }

        fetchNews();
    }, []);

    console.log(news);
    return (
            <Carousel itemsToShow={4}>
            {
                    news.map(article => (
                        <NewsCard key={article.title} article={article}></NewsCard>
                    ))
                }
            </Carousel>
    );
}

export default NewsList;
