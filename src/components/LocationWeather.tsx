import { useState } from "react";
import { geoLocation } from "../geoLocation";
import { kelToCF } from "../KelvinToCelsius";
import { loadImage } from "../loadImage";
import { WeatherFetcher } from "../WeatherFetcher";
import { Weather } from "./Weather";

function GetGeoWeather() {
  const [infoTemp, setInfoTemp] = useState(true);
  const [city, setCity] = useState({
    weather: "Sunny",
    temperature: "20 C",
    wind: 1,
    name: "Gothenburg",
    url: "./assets/sunny/sunny1.jpg",
    deg: 20,
  });
  const [count, setCount] = useState(1);

  if (navigator && count === 1) {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=72ce280222d220a20b10856b83fcdee3`
      );
      let data = await response.json();
      let wind = Math.floor(data.wind.speed);
      let windDeg = data.wind.deg;
      let newWeather: {
        weather: string;
        temperature: string;
        wind: number;
        name: string;
        url: string;
        deg: number;
      };
      newWeather = {
        weather: data.weather[0].main,
        temperature: kelToCF(data.main.temp, infoTemp),
        wind: wind,
        name: data.name,
        url: await loadImage(data.weather[0].main),
        deg: windDeg,
      };
      setCity(newWeather);
      setCount(2);
    });
  }
  // let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=72ce280222d220a20b10856b83fcdee3`)
  // let data = await response.json()
  // let wind = Math.floor(data.wind.speed)
  // let windDeg = data.wind.deg

  // let newWeather = {weather: data.weather[0].main, temperature: kelToCF(data.main.temp, infoTemp), wind: wind, name: name, url: await loadImage(data.weather[0].main), deg: windDeg}

  return (
    <div className="">
      <Weather city={city} />
    </div>
  );
}

export default GetGeoWeather;
