import { useWeatherContext } from '../../../context';
import { API_ENDPOINT_CITY, API_KEY } from '../../../core/api';
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
        apiPrefix={`${API_ENDPOINT_CITY}/direct?limit=5&appid=${API_KEY}&q=`}
        opts={opts}
        onOptionSelect={setLocation}
      />
    </div>
  );
};
