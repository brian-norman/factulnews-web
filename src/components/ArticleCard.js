import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


function addDefaultSrc(ev) {
    ev.target.src = "././logo512.png"
}

export default function ArticleCard(props) {
    return (
        <Card style={{ width: '25rem', marginTop: '1rem', marginLeft: '1rem' }}>
            <Card.Img onError={addDefaultSrc} variant="top" src={props.urlToImage} />
            <div style={{ padding: "1rem"}}>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{fontSize: "0.9rem"}}>{props.snippet}</Card.Text>
                {props.timeToRead !== null 
                    ?
                        <Card.Subtitle className="mb-2 text-muted">{props.timeToRead} minute read</Card.Subtitle>  
                    :
                        null}
                <Button
                    href={props.url}
                    variant="primary" 
                    style={{position: "absolute", right: "0.5rem", bottom: "0.5rem"}}
                >
                    Open
                </Button>
            </div>
        </Card>
    )
}
