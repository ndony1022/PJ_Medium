import React, { useEffect, useState } from 'react';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        // 환경 변수 사용: process.env.REACT_APP_API_URL
        const apiUrl = process.env.REACT_APP_API_URL; // 예: http://my-backend-env.eba-xxxxx.us-west-2.elasticbeanstalk.com
        const response = await fetch(`${apiUrl}/api/feed`);
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
