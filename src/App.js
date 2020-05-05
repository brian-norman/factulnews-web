import React, { useEffect, useState } from 'react'
import './App.css'

import ArticleCard from './components/ArticleCard'


export default function App() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetch("https://factfulnews.herokuapp.com/general")
      .then(res => res.json())
      .then(res => res.articles)
      .then(res => setArticles(res))
      .catch(error => alert(error))
  }, [])

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
      {articleCards}
    </div>
  )
}
