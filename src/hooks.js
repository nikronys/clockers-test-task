import { useState, useEffect } from 'react';

export const useCurrentLocation = () => {
  const [location, setLocation] = useState();

  const handleSuccess = position => {
    const { latitude, longitude } = position.coords;

    setLocation({
      latitude,
      longitude
    });
  };

  useEffect(() => {
    const { geolocation } = navigator;

    if (!geolocation) {
      return;
    }

    geolocation.getCurrentPosition(handleSuccess, alert);
  }, []);

  return location;
};