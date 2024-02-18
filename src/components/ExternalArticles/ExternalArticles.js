import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import './styles.css';

function ExternalArticles() {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchArticles();
    }, [page]);

    const fetchArticles = async () => {
        try {
            const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=5c74ebe27da14b59a4b1db49cb19abb0&page=${page}&pageSize=10`);
            const newArticles = response.data.articles;
            setArticles(prevArticles => [...prevArticles, ...newArticles]);
        } catch (error) {
            console.error('Error fetching articles:', error);
        }
    };
    const handleLoadMore = () => {
        setPage(prevPage => prevPage + 1);
    };

    return (
        <div>
            <div className="articles-container">
            {articles.map((article, index) => (
                <div className="article" key={index}>
                    <img className="article-image" src={article.urlToImage} alt="Article" />
                    <h2 className="article-title">{article.title}</h2>
                    <p className="article-description">{article.description}</p>
                    <p className="article-author">Author: {article.author}</p>
                </div>
            ))}
            </div>
            <button className="load-more-btn" onClick={handleLoadMore}>Load More Articles</button>
        </div>
    );
}


export default ExternalArticles;
