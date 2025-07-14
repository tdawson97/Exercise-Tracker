import React from "react";
import {Link} from 'react-router-dom';

function Navigation() {
  return (
    <nav className="App-nav">
      <Link id="home-link" to="/">Home</Link>
      
      <Link id="add-link" to="/create-exercise">Add</Link>
    </nav>
  );
}

export default Navigation;