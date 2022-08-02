import axios from 'axios';

const API_KEY = process.env.REACT_APP_TMDB_KEY;
const baseUrl = 'https://newsapi.org/v2/top-headlines';
const COUNTRY = 'id';
const CATEGORY = 'health';
const HEALTH = 'health';
const SPORT = 'sport';
const SCIENCE = 'science';

const newsApi = axios.create({
  baseURL: baseUrl,
  params: {
    apiKey: API_KEY,
    country: COUNTRY,
    category: CATEGORY,
  },
});


export const newsApiHealth = axios.create({
  baseURL: baseUrl,
  params: {
    apiKey: API_KEY,
    country: COUNTRY,
    category: HEALTH,
  },
});

export const newsApiSport = axios.create({
  baseURL: baseUrl,
  params: {
    apiKey: API_KEY,
    country: COUNTRY,
    category: SPORT,
  },
});

export const newsApiScience = axios.create({
  baseURL: baseUrl,
  params: {
    apiKey: API_KEY,
    country: COUNTRY,
    category: SCIENCE,
  },
});

export default newsApi;