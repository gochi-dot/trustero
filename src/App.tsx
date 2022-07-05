import React from 'react';
import { RestaurantSelect } from 'components/restaurant-select/restaurant-select';

/**
 * Given two API endpoints
 * 1. "https://interview-server-2022.boadler.repl.co/cities"
 *   - Used to fetch a list of cities
 * 2. "https://interview-server-2022.boadler.repl.co/restaurants/:city"
 *   - Used to fetch a list of restaurants given a city
 *
 * Build a UI that fetches and displays a dropdown list of cities.
 * The dropdown, when a city is selected, will display a list of
 * associated restaurants.
 *
 * The dropdown should not be clickable before the list of cities is fetched.
 * The list of restaurants for a city might change between API calls.
 *
 * Please feel free to modify/structure the code into seperate files/folders.
 * You can use Google for details (such as looking up how to use some function
 * like `setInterval()`), but the overall structure of the solution should be
 * your own idea.
 */

function App() {
  return (
    <div className="App">
      <RestaurantSelect />
    </div>
  );
}

export default App;
