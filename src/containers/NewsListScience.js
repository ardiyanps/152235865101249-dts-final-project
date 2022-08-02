import Carousel from 'react-elastic-carousel';
import { useEffect, useState } from 'react';
import { newsApiScience } from '../apis/news';
import NewsCardScience from '../components/NewsCardScience';

const NewsListScience = () => {
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
            <Carousel itemsToShow={4}>
            {
                    newsScience.map(article => (
                        <NewsCardScience key={article.title} article={article}></NewsCardScience>
                    ))
                }
            </Carousel>
    );
}

export default NewsListScience;
