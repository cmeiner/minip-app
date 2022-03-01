import { loadImage } from "./loadImage";
import { kelToCF } from "./KelvinToCelsius";

export async function WeatherFetcher(infoTemp: boolean, city: string) {
  let cityResponse = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=72ce280222d220a20b10856b83fcdee3`
  );
  let cityData = await cityResponse.json();

  if (cityData.length === 0 || !cityResponse.ok) {
    let ErrorWeather = {
      weather: "ERROR",
      temperature: "ERROR",
      wind: 0,
      name: "NO LOCATION FOUND",
      url: "./assets/sunny/sunny1.jpg",
      deg: 0,
    };
    return ErrorWeather;
  }

  let lat = cityData[0].lat;
  let long = cityData[0].lon;
  let name = cityData[0].name;
  return getWeather(lat, long, infoTemp, name);
}

async function getWeather(
  lat: string,
  long: string,
  infoTemp: boolean,
  name: string
) {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=72ce280222d220a20b10856b83fcdee3`
  );
  let data = await response.json();
  let wind = Math.floor(data.wind.speed);
  let windDeg = data.wind.deg;

  let newWeather = {
    weather: data.weather[0].main,
    temperature: kelToCF(data.main.temp, infoTemp),
    wind: wind,
    name: name,
    url: await loadImage(data.weather[0].main),
    deg: windDeg,
  };
  // console.log(kelToCF(data.main.temp, infoTemp))
  return newWeather;
}
