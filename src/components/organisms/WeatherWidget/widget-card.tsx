import React, { FC } from 'react';
import { useWeatherContext } from '../../../context';
import './styles.css';

const CardInfo: FC<{ label: string; value?: string | number }> = ({
  label,
  value,
}) => {
  return (
    <div className="weather-app__widget_card_info">
      <h4>{label}</h4>
      <p>{value}</p>
    </div>
  );
};

export const WidgetCard = () => {
  const { weatherInfo } = useWeatherContext();

  return (
    <div className="weather-app__widget_card">
      <CardInfo label="feels like" value={weatherInfo?.current.feels_like} />
      <CardInfo label="uvi" value={weatherInfo?.current.uvi} />
      <CardInfo label="humidity" value={weatherInfo?.current.humidity} />
      <CardInfo label="wind speed" value={weatherInfo?.current.wind_speed} />
    </div>
  );
};
