import './App.css';
import { useState } from 'react';
import { CitySearch } from '../components/organisms/CitySearch';
import { WeatherWidget } from '../components/organisms/WeatherWidget';
import { WeatherContext } from '../context';
import { Location } from '../core/types';

export const App = () => {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [location, setLocation] = useState<Location | null>(null);
  const contextValues = {
    location,
    weatherInfo,
    setLocation,
    setWeatherInfo,
  };

  return (
    <div className="weather-app__container">
      <WeatherContext.Provider value={contextValues}>
        <CitySearch />
        <WeatherWidget />
      </WeatherContext.Provider>
    </div>
  );
};
