import React from 'react';

const ArticleDetail = ({ article }) => {
  return (
    <div>
      <h2>{article.translatedTitle || article.title}</h2>
      <p>{article.contentSnippet || article.content}</p>
      <a href={article.link} target="_blank" rel="noopener noreferrer">
        원문 보기
      </a>
    </div>
  );
};

export default ArticleDetail;