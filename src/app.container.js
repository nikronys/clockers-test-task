import React, { useEffect, useState } from 'react';

import App from './app';
import { useCurrentLocation } from './hooks';

function AppContainer() {
  const location = useCurrentLocation();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      if (location) {
        const cities = await fetch(
          `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${location.latitude},${location.longitude}`
        )
        .then(response => response.json())
        .catch(alert);

        const result = await fetch(
          `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${cities[0].woeid}`
        )
        .then(response => response.json())
        .catch(alert);
   
        setData(result);
      }
    };

    fetchData();
  }, [location]);

  return <App location={location} weather={data}/>
}

export default AppContainer;