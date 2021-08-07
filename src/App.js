import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import Article from './components/Article';
import Header from './components/HeaderComponent';
import { Navbar, NavbarBrand, NavItem } from 'reactstrap';

function App() {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState('china_irl');

  useEffect(() => {
    fetch("https://www.reddit.com/r/" + subreddit + ".json").then(res => {
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
      <Navbar dark expand="md">
        <NavbarBrand>
            translateR
        </NavbarBrand>
          <input type="text" className="input" value={subreddit} onChange={e => setSubreddit(e.target.value)}/>
      </Navbar>
      <div className="articles">
        { (articles != null) ? articles.map( (article, index) => <Article key={index} article={article.data} subreddit={subreddit}/> ) : '' }
      </div>
    </div>
    
  );
}

export default App;
