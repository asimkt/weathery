import './App.css';
import {WeatherContext} from '../context';
import { useState } from 'react';
import { CitySearch } from '../components/organisms/CitySearch';
import { WeatherWidget } from '../components/organisms/WeatherWidget';

function App() {
  const[weather, setWeather] = useState(null);
  const contextValues  = {
    weatherInfo: weather,
    setWeatherInfo:setWeather
  }
  
  return ( 
    <div className='weather-app__container'>
      <WeatherContext.Provider value={contextValues}>
        <CitySearch />
        <WeatherWidget />
      </WeatherContext.Provider>
    </div>
  )
}

export default App;
