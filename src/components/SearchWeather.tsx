import { useState, useEffect } from "react";
import { loadImage } from "../loadImage";
import { WeatherFetcher } from "../WeatherFetcher";
import { Weather } from "./Weather";

function SetWeather() {
  const [selectedCity, setSelectedCity] = useState("");
  const [cityWeather, setCityWeather] = useState({
    weather: "...",
    temperature: "...",
    wind: 1,
    name: "Location...",
    url: "./assets/sunny/sunny1.jpg",
    deg: 0,
  });
  const [infoTemp, setTemp] = useState(true);
  const [selectedTemp, setSelectedTemp] = useState("");

  async function handleWeatherCity(e: any) {
    let inputCity = e.target.value;
    setSelectedCity(inputCity);
  }

  async function UpdateWeather(e: any) {
    e.preventDefault();

    if (selectedCity.length > 1) {
      let newWeather = await WeatherFetcher(infoTemp, selectedCity);
      setCityWeather(newWeather);
    }
  }

  return (
    <div className="">
      <form onSubmit={UpdateWeather} className="">
        <input
          placeholder="City..."
          className="input-bordered input mr-1"
          required
          onChange={handleWeatherCity}
          value={selectedCity}
          type="text"
        />
        <button className="btn my-2 ml-1" type="submit">
          Search City
        </button>
      </form>
      <Weather city={cityWeather} />
    </div>
  );
}

export default SetWeather;
