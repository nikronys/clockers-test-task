import React from 'react';
import './app.css';

function App({ location, weather }) {
  if (!location) {
    return (
      <div className="app">
        You need to allow to track your location.
      </div>
    );
  }

  if (!weather.consolidated_weather) {
    return (
      <div className="app">
        Loading...
      </div>
    );
  }

  return (
    <div className="app">
      <div className="weather-block">
        {weather.title} {Math.round(weather.consolidated_weather[0].the_temp)}°C
      </div>
    </div>
  );
}

export default App;
