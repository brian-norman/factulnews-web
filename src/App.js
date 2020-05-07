import React from 'react'
import './App.css'
import ArticleList from './components/ArticleList'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'


export default function App() {
  return (
    <Tabs defaultActiveKey="general" id="uncontrolled-tab-example">
      <Tab eventKey="general" title="General">
        <ArticleList category="general" />
      </Tab>
      <Tab eventKey="business" title="Business">
        <ArticleList category="business" />
      </Tab>
      <Tab eventKey="entertainment" title="Entertainment">
        <ArticleList category="entertainment" />
      </Tab>
      <Tab eventKey="health" title="Health">
        <ArticleList category="health" />
      </Tab>
      <Tab eventKey="science" title="Science">
        <ArticleList category="science" />
      </Tab>
      <Tab eventKey="sports" title="Sports">
        <ArticleList category="sports" />
      </Tab>
      <Tab eventKey="technology" title="Technology">
        <ArticleList category="technology" />
      </Tab>
    </Tabs>
  )
}
