import React from 'react';
import './article.css'



const Article = ({ imgUrl, date, title }) => {
    return (
        <div className='gpt3__blog-container_article'>
            <div className='gpt3__blog-container_article_image'>
                <img src={imgUrl} alt="blog" />
            </div>
            <div className='gpt3__blog-container_article-content'>
                <div>
                    <p>{date}</p>
                    <h1>{title}</h1>
                </div>
                <p>Read Full Article</p>
            </div>
        </div>
    );
};

export default Article;