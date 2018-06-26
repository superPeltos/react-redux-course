import axios from 'axios';

const API_KEY = '721165eef15b31f70b2456a445599d48';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export function fetchWeather(city){

  const url = `${ROOT_URL}&q=${city},fr`;
  console.log(url);
  const request = axios.get(url);

  return{
    type:FETCH_WEATHER,
    payload: request
  }
}