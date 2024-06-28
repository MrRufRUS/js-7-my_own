import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WeatherCard.css';

const WeatherCard = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = ''; // Замените на ваш API ключ

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?city=${city}&appid=${API_KEY}`);
        setWeatherData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [city]);

  if (loading) {
    return <div className="weather-card">Loading...</div>;
  }

  if (error) {
    return <div className="weather-card">Error: {error}</div>;
  }

  return (
    <div className="weather-card">
      <h2>{weatherData.name}</h2>
      <div className="weather-info">
        <div className="weather-icon">
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.weather[0].description}
          />
        </div>
        <div className="weather-details">
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind: {weatherData.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
