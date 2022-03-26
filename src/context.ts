import { createContext, useContext } from 'react';


interface WeatherContextType {
  weatherInfo: any,
  setWeatherInfo: (val: any) => void
}

export const WeatherContext =
  createContext<WeatherContextType | null>(null);

export const useWeatherContext = () => {
  const context = useContext(WeatherContext);

  if (!context) {
    throw new Error(
      'This context hook must be used within a <WeatherContext.Provider>.',
    );
  }

  return context;
};
