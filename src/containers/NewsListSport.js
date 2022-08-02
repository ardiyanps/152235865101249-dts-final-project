import Carousel from 'react-elastic-carousel';
import { useEffect, useState } from 'react';
import { newsApiSport } from '../apis/news';
import NewsCardSport from '../components/NewsCardSport';

const NewsListSport = () => {
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

    console.log(newsSport);
    return (
            <Carousel itemsToShow={4}>
            {
                    newsSport.map(article => (
                        <NewsCardSport key={article.title} article={article}></NewsCardSport>
                    ))
                }
            </Carousel>
    );
}

export default NewsListSport;
