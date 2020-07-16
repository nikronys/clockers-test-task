import React, { useEffect, useState } from 'react';

import App from './app';
import { useCurrentLocation } from './hooks';
import { getColorByTemprature } from './helpers';

function AppContainer() {
  const location = useCurrentLocation();
  const [data, setData] = useState({});
  const [background, setBackground] = useState('');

  const onSliderChange = (color) => {
    setBackground(color.hex);

    const root = document.getElementById('root');

    root.style.background = color.hex;
  }

  useEffect(() => {
    const fetchData = async () => {
      if (location) {
        const cities = await fetch(
          `${process.env.NODE_ENV === 'development' ? 'https://cors-anywhere.herokuapp.com/' : ''}https://www.metaweather.com/api/location/search/?lattlong=${location.latitude},${location.longitude}`
        )
        .then(response => response.json())
        .catch(alert);

        const result = await fetch(
          `${process.env.NODE_ENV === 'development' ? 'https://cors-anywhere.herokuapp.com/' : ''}https://www.metaweather.com/api/location/${cities[0].woeid}`
        )
        .then(response => response.json())
        .catch(alert);

        const color = getColorByTemprature(result.consolidated_weather[0].the_temp);

        setBackground(color);

        const root = document.getElementById('root');

        root.style.background = color;
   
        setData(result);
      }
    };

    fetchData();
  }, [location]);

  return (
    <App
      location={location}
      weather={data}
      background={background}
      onSliderChange={onSliderChange}
    />
  )
}

export default AppContainer;
