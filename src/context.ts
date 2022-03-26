import { createContext, useContext } from 'react';
import { Location } from './core/types';

interface WeatherContextType {
  weatherInfo: any;
  setWeatherInfo: (val: any) => void;
  location: Location | null;
  setLocation: (loc: Location) => void;
}

export const WeatherContext = createContext<WeatherContextType | null>(null);

export const useWeatherContext = () => {
  const context = useContext(WeatherContext);

  if (!context) {
    throw new Error(
      'This context hook must be used within a <WeatherContext.Provider>.',
    );
  }

  return context;
};
