import { useWeatherContext } from '../../../context';
import { TypeAhead } from '../../molecules/typeahead';

export const CitySearch = () => {
  const { setLocation } = useWeatherContext();

  const opts = {
    labelKey: 'name',
    label: 'City ',
    errorMsg: 'Search for a valid city',
  };

  return (
    <div className="CitySearch">
      <TypeAhead
        apiPrefix="http://api.openweathermap.org/geo/1.0/direct?limit=5&appid=efe7c8c7a0ffe99e008f261e428fee84&q="
        opts={opts}
        onOptionSelect={setLocation}
      />
    </div>
  );
};
