import React from 'react';
import MicroFrontend from '../microfrontend';

const newsHost = process.env.REACT_APP_NEWS_HOST;

const News = () => {
    return <MicroFrontend name="News" host={newsHost} />
}

export default News;