import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CV from './CV'
import Home from './Home'
import Publications from './Publications';
import Blog from './Blog';
import "./styles.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/pub">Publications</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><a href="./CV.pdf" download="Harshit_cv.pdf">CV</a></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pub" element={<Publications />} />
          <Route path="/blogs" element={<Blog />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
