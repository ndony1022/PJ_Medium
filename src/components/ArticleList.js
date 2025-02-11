import React, { useEffect, useState } from 'react';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/feed");
        const feed = await response.json();
        setArticles(feed.items);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };
    fetchArticles();
  }, []);

  return (
    <div>
      <h2>Translated Medium Articles</h2>
      <ul>
        {articles.length > 0 ? (
          articles.map((article, idx) => (
            <li key={idx}>
              <a href={article.link} target="_blank" rel="noopener noreferrer">
                {article.translatedTitle || article.title}
              </a>
            </li>
          ))
        ) : (
          <li>No articles found.</li>
        )}
      </ul>
    </div>
  );
};

export default ArticleList;