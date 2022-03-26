import { useEffect } from 'react';
import { useWeatherContext } from '../../../context';
import { API_ENDPOINT_WEATHER, API_KEY } from '../../../core/api';
import celsiusIcon from './cel.svg';
import locationIcon from './location.svg';
import './styles.css';

export const WeatherWidget = () => {
  const { weatherInfo, location, setWeatherInfo } = useWeatherContext();

  useEffect(() => {
    if (!location) {
      return;
    }
    fetch(
      `${API_ENDPOINT_WEATHER}?lat=${location?.lat}&lon=${location?.lon}&appid=${API_KEY}&units=metric`,
    )
      .then((res) => res.json())
      .then((res) => {
        setWeatherInfo(res);
      });
  }, [location, setWeatherInfo]);

  const icon = weatherInfo?.current.weather[0]?.icon;

  return location ? (
    <div className="weather-app__widget">
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
      <h2 className="weather-app__widget_temp">
        {weatherInfo?.current.temp.toFixed(0)}
        <img
          className="weather-app__widget_temp_img"
          src={celsiusIcon}
          alt="celsius"
        />
      </h2>
    </div>
  ) : null;
};
