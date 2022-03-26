import './App.css';
import { useState } from 'react';
import { useWeatherContext } from '../../context';


export const CitySearch = () => {
  const[query, setQuery] = useState();
  
  const {weatherInfo} = useWeatherContext();
  return (
    <div>
        <form>
            <input type="text" placeholder='Search cities'/>
        </form>
    </div>
  );
}
