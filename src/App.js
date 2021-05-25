import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import Article from './components/Article';
import Header from './components/HeaderComponent';

function App() {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState('webdev');

  useEffect(() => {
    fetch("https://www.reddit.com/r/china_irl.json").then(res => {
      if (res.status != 200) {
        console.log("ERROR");
        return;
      }
      res.json().then(data => {
        if (data != null) {
          setArticles(data.data.children);
          console.log(data);
        }
      });
    })
    
  }, [subreddit]);

  return (
    <div className="App">
      <Header />
      <div className="articles">
        { (articles != null) ? articles.map( (article, index) => <Article key={index} article={article.data}/> ) : '' }
      </div>
    </div>
    
  );
}

export default App;
