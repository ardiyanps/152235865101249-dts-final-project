import Carousel from 'react-elastic-carousel';
import { useEffect, useState } from 'react';
import { newsApiScience } from '../apis/news';
import NewsCardCarousel from './NewsCardCarousel';

const NewsCarousel = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const fetchedNews = await newsApiScience.get();
                setNews(fetchedNews.data.articles);
            } catch (error) {
                console.log(error);
            }
        }

        fetchNews();
    }, []);

    return (
            <Carousel itemsToShow={1}>
            {
                    news.map(article => (
                        <NewsCardCarousel key={article.title} article={article}></NewsCardCarousel>
                    ))
                }
            </Carousel>
    );
}

export default NewsCarousel;
