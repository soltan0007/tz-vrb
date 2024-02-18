import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addArticle, removeArticle, pinArticle } from '../../redux/actions/actions';
import './styles.css';


function ArticleList() {
    const articles = useSelector(state => state.articles);
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [user, setUser] = useState('');
    const [desc, setDesc] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addArticle(title, user, desc));
        setTitle('');
        setUser('');
        setDesc('');
    };

    return (
        <div className="article-list-container">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter article title"
                />
                <input
                    type="text"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    placeholder="Enter article user"
                />
                <input
                    type="text"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                    placeholder="Enter article description"
                />
                <button type="submit">Add Article</button>
            </form>
            <div className="article-list">
                {articles.map((article, index) => (
                    <div key={index} className="article-item">
                        <h2 className="article-title">{article.title}</h2>
                        <p className="article-description">{article.description}</p>
                        <p className="article-author">Author: {article.author}</p>
                        <button onClick={() => dispatch(removeArticle(index))}>Remove</button>
                        <button onClick={() => dispatch(pinArticle(index))}>Pin</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ArticleList;
