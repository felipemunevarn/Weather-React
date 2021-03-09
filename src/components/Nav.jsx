import React from 'react';
import SearchBar from './SearchBar.jsx';
import Toggle from './Toggle.jsx';
import './Nav.css';
import { Link } from 'react-router-dom';


function Nav({onSearch, onChange}) {  
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to={process.env.PUBLIC_URL + '/'}>
        <span className="navbar-brand">          
          Weather App
        </span>
      </Link>
      <Link to={process.env.PUBLIC_URL + '/about'}>
        <span>About</span>
      </Link>
      <Toggle onChange={onChange} />
      <SearchBar
        onSearch={onSearch}
      />
    </nav>
  );
};

export default Nav;
