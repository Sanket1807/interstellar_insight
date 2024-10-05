import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'; 

const News = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRSSFeed = async () => {
            try {
                const response = await axios.get('https://api.rss2json.com/v1/api.json', {
                    params: {
                        rss_url: 'https://www.sciencedaily.com/rss/space_time.xml',
                    },
                });
                setArticles(response.data.items);
                setLoading(false);
            } catch (err) {
                setError('Failed to load the feed');
                setLoading(false);
            }
        };

        fetchRSSFeed();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="news-container">
            <h1 align="center">Astronomy News</h1>
            <div className="articles">
                {articles.map((article, index) => (
                    <div key={index} className="article-card">
                        <h2 className="article-title">{article.title}</h2>
                        <p className="article-description">{article.description}</p>
                        <a href={article.link} target="_blank" rel="noopener noreferrer" className="article-link">
                            Read more
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default News;
