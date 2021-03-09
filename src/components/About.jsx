import React from 'react';
//import { Link } from 'react-router-dom';


function About({onSearch}) {
  return (
    <nav>
        <span>         
          <h2>ABOUT</h2>
        </span>
        <span>         
          <div>Frontend App done with React using <a href='https://openweathermap.org/api'>https://openweathermap.org/api</a></div>
          {/* <div>This app has a pre-loaded city which is Ubate because there is where my parents live. Feel free to close it!!!</div> */}
          <div>Coded by Andres Munevar</div>
        </span>
    </nav>
  );
};

export default About;