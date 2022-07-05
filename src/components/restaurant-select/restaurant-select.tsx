import { useCallback, useEffect, useMemo, useState } from "react"
import { Restaurant } from "models/restaurant.model";
import { Select } from 'base/select';
import { CityService } from "services/city/city.service";
import styled from "styled-components";
import { Option } from "base/select/models";

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

/**
 * Components, that renders the async list of cities
 * with a functionality to fetch the list of 
 * restaurants for the city.
 */
export const RestaurantSelect = () => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [cities, setCities] = useState<Restaurant[]>([]);

  useEffect(() => {
    (async () => {
      const res = await CityService.fetchCities();
      // TODO: add error handling
      setCities(res);
    })();
  }, []);

  // Prepare root options for the select,
  // rendering the memoized list of cities
  const options = useMemo(() => {
    return cities.map(el => ({ id: el, label: el }));
  }, [cities])

  const handleSelect = useCallback((option: Option) => {
    setSelectedOption(option);
  }, [])

  return (
    <Wrapper>
      <Select options={options} 
              placeholder="Select Restaurant" 
              onSelect={handleSelect} 
              selectedOption={selectedOption}
      />
    </Wrapper>
  );
}