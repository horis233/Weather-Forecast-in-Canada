import axios from 'axios';

const API_KEY = '6c446cd3d9e25dedb8440db541f81657';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q= ${city}, ca`;
  const request = axios.get(url);

  console.log("Request: ", request);

  return {
      type: FETCH_WEATHER,
      payload: request
  };
}
