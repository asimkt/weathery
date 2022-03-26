import { useState } from 'react';
import { WeatherApp } from '../components/organisms/WeatherApp';
import { WeatherContext } from '../context';
import { Location, Weather } from '../core/types';

export const App = () => {
  const [weatherInfo, setWeatherInfo] = useState<Weather | null>(null);
  const [location, setLocation] = useState<Location | null>(null);
  const contextValues = {
    location,
    weatherInfo,
    setLocation,
    setWeatherInfo,
  };

  return (
    <WeatherContext.Provider value={contextValues}>
      <WeatherApp />
    </WeatherContext.Provider>
  );
};
