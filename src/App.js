import './App.css';

// importing the react router
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import HomePage from './pages/Home.js';
import AboutPage from './pages/About';
import ArticleList from './pages/ArticlesList';
import Article from './pages/Article';

import NavBar from './NavBar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div id="page-body">

          {/* displays the different pages(routes) in the Web App */}
          <Routes>
            {/* displays the page and the URL, path="/" used a prop, element=What Page you want to display */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles" element={<ArticleList />} />

            {/* //path="/articles/:articleId" means it can take random URL*/}
            {/* it is actually called URL paramter and it is used when we want to display multiple different pages from the same component */}
            <Route path="/articles/:articleId" element={<Article />} />
          </Routes>

        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
