import { useWeatherContext } from '../../../context';
import './styles.css';

export const WeatherWidget = () => {
  const { weatherInfo } = useWeatherContext();

  return <div className="weather-app__widget">{weatherInfo}</div>;
};
