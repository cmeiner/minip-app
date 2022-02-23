import { useState, useEffect } from "react";
import { WeatherFetcher } from "./WeatherFetcher";

function Weather() {


    const [selectedCity, setSelectedCity] = useState('')
    const [cityWeather, setCityWeather] = useState({weather: "Sunny", temperature: 20, wind: 1, name: 'Gothenburg'})



    function handleWeatherCity(e : any) {
        let inputCity = e.target.value
        setSelectedCity(inputCity)
    }

    async function setWeather(e : any) {
        
        let newWeather = await WeatherFetcher(selectedCity)
        setCityWeather(newWeather)
        
    }
    
    return (
        <div>
            <input onChange={handleWeatherCity} value={selectedCity} type="text" />
            <button onClick={setWeather}>Ändra stad</button>
            <h1>{cityWeather.name}</h1>
            <h1>{cityWeather.weather}</h1>
            <h1>{cityWeather.temperature}</h1>
            <h2>Wind speed:</h2>
            <h1>{cityWeather.wind} m/s</h1>
        </div>
    )
}

export default Weather;