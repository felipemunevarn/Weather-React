import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import About from '../components/About.jsx';
import Ciudad from '../components/Ciudad.jsx';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
  // const ubate = ;
  const [cities, setCities] = useState([]);
  const [isToggled, setToggled] = useState(false);
  
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id != id));
  }

  function handleCheckboxChange(){
    if(isToggled === false){
      setToggled(true);
    } else { 
      setToggled(false);
    }

  }

  function onSearch(ciudad) {
    var units = (isToggled === false) ? 'metric' : 'imperial';
    var symbol = (units === 'metric') ? 'C' : 'F';
    //Llamado a la API del clima
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=${units}&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
            country: recurso.sys.country,
            symbol: symbol
          };
          if(!cities.find(city => city.id === ciudad.id)){
            setCities(oldCities => [...oldCities, ciudad]);
            //this.setState({cities: [...this.state.cities, ciudad]});
          } else { 
            alert("City already showed");
          }
        } else {
          alert("City not found");
        }
      });
  }

  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }

  return (
    <div className="App">
      <Route
        path='/'
        render={() => <Nav onSearch={onSearch} onChange={handleCheckboxChange}/>}
      />
      <Route
        exact path='/about'
        component={About}
      />
      <Route
        exact path='/'
        render={() => <Cards 
          cities={cities}
          onClose={onClose}
        /> }              
      />
      <Route  
        exact path='/ciudad/:ciudadId'
        render={({match}) => <Ciudad
          city={onFilter(match.params.ciudadId)}
        />}
      />
      <hr />
    </div>
  );
}

export default App;
