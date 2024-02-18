import React from 'react';
import ArticleList from './components/ArticleList/ArticleList';
import ExternalArticles from './components/ExternalArticles/ExternalArticles';

function App() {
  return (
      <div>
        <h1>My Articles</h1>
        <ArticleList />
        <h2>External Articles</h2>
        <ExternalArticles />
      </div>
  );
}

export default App;
