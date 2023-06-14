import React, { useState } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Introduction from './Introduction';
import Team from './Team';
import WhatWeDo from './WhatWeDo';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('Introduction');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Router>
      <header className='app-header'>
         <NavLink exact to="/">
            <img src="/download.png" alt="Arthmate" />
          </NavLink>
      </header>
      <div className="app-container">
        
        {/* Tabs */}
        <div className="app-sidebar">
          <li> <NavLink
            exact
            to="/"
            activeClassName="active"
            onClick={() => handleTabClick('Introduction')}
          >
            <h2>Introduction</h2>
          </NavLink></li>
          <li> <NavLink
            to="/team"
            activeClassName="active"
            onClick={() => handleTabClick('Team')}
          >
          <h2>Team</h2>
          </NavLink></li>
          <li> <NavLink
            to="/about"
            activeClassName="active"
            onClick={() => handleTabClick('What We Do')}
          >
          <h2>What we do</h2>
          </NavLink></li>
        </div>
        {/* Content */}
        {activeTab === 'Introduction' && <Introduction />}
        {activeTab === 'Team' && <Team />}
        {activeTab === 'What We Do' && <WhatWeDo />}
      </div>
    </Router>
  );
};

export default App;
