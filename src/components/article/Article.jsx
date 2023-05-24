import React from 'react';
import './article.css'

export const Article = ({ imgUrl, date, text }) => {
  return (
    <div className="gpt3__blog-container_article flex-col">
      <div className="gpt3__blog-container_article-image">
        <img src={imgUrl} alt="blog_image" />
      </div>
      <div className="gpt3__blog-container_article-content flex-col">
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}
