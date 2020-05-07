import React, { useEffect, useState } from 'react'
import ArticleCard from './ArticleCard'


export default function ArticleList(props) {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch("https://factfulnews.herokuapp.com/" + props.category)
      .then(res => res.json())
      .then(res => res.articles)
      .then(res => setArticles(res))
      .catch(error => alert(error))
  }, [props.category])

  const articleCards = articles
                        .map(article => <ArticleCard 
                                            key={article.title} 
                                            title={article.title} 
                                            urlToImage={article.urlToImage} 
                                            snippet={article.snippet}
                                            timeToRead={article.timeToRead}
                                            url={article.url}
                                        /> 
                            )

  return (
    <div>
        <h1 style={{textTransform: "capitalize"}}>{props.category}</h1>
        {articleCards}
    </div>
  )
}
