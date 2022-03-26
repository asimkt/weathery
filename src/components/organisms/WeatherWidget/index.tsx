import { useEffect } from 'react';
import { useWeatherContext } from '../../../context';
import { API_ENDPOINT_WEATHER, API_KEY } from '../../../core/api';
import locationIcon from './location.svg';
import './styles.css';

export const WeatherWidget = () => {
  const { weatherInfo, location, setWeatherInfo } = useWeatherContext();

  useEffect(() => {
    fetch(
      `${API_ENDPOINT_WEATHER}?lat=51.5073219&lon=-0.1276474&appid=${API_KEY}`,
    )
      .then((res) => res.json())
      .then((res) => {
        setWeatherInfo(res);
      });
  }, [location?.name, setWeatherInfo]);

  const icon = weatherInfo?.current.weather[0]?.icon;

  return (
    <div className="weather-app__widget">
      <h5>{weatherInfo?.current.weather[0]?.description}</h5>
      <img
        className="weather-app__widget_img"
        src={`http://weathery-assets.surge.sh/${icon}.svg`}
        alt={weatherInfo?.current.weather[0]?.description}
      />
      <h3 className="weather-app__widget_location">
        {location?.name}
        <img
          className="weather-app__widget_location_img"
          src={locationIcon}
          alt="location"
        />
      </h3>
    </div>
  );
};
