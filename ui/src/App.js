// Import dependencies
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';

// Import Components, styles, media
import './App.css';

// Import Pages
import EditPage from './pages/EditPage.js';
import CreatePage from './pages/CreatePage.js';
import HomePage from './pages/HomePage.js';
import Navigation from './components/Nav.js';


function App() {  

  const [exercise, setex] = useState([]);

  return (
    <>
      <Router>
          <header>
            <h1>My Fitness Buddy!</h1>
            <p>Keep track of your fitness!</p>
          </header>
          <Navigation />
          <main>
            <Route path="/" exact>
              <HomePage setex={setex} />
            </Route>
            <Route path="/add">
              <CreatePage />
            </Route>
            <Route path="/edit">
              <EditPage exercise={exercise} />
            </Route>
          </main>
          <footer>
          <p>©  2022 Behrad Noorani.</p>
          </footer>
      </Router>
    </>
  );
}

export default App;
