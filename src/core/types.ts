export interface Location {
  name: string;
  lat: number;
  lon: number;
}

export interface Weather {
  current: {
    clouds: number;
    dew_point: number;
    dt: number;
    feels_like: number;
    humidity: number;
    pressure: number;
    sunrise: number;
    sunset: number;
    temp: number;
    uvi: number;
    visibility: number;
    weather: [
      {
        description: string;
        icon: string;
        id: number;
        main: string;
      },
    ];
    wind_deg: number;
    wind_speed: number;
  };
}
