import { useWeatherContext } from '../../../context';
import { CitySearch } from '../CitySearch';
import { WeatherWidget } from '../WeatherWidget';
import './styles.css';

export const WeatherApp = () => {
  const { weatherInfo } = useWeatherContext();

  const icon = weatherInfo?.current.weather[0]?.icon;
  const isNight = icon?.split('')[2] === 'n';

  return (
    <div
      className={`weather-app ${
        isNight ? 'weather-app--night' : 'weather-app--day'
      }`}
    >
      <CitySearch />
      <WeatherWidget />
    </div>
  );
};
