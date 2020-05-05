import React from 'react'

export default function ArticleCard(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <img src={props.urlToImage} alt="Visual preview of article" />
            <p>{props.snippet}</p>
        </div>
    )
}
