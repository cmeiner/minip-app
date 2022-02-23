import { useState, useEffect } from "react";
import { WeatherFetcher } from "./WeatherFetcher";

function Weather() {


    const [selectedCity, setSelectedCity] = useState('')
    const [cityWeather, setCityWeather] = useState({weather: "Sunny", temperature: "20 C", wind: 1, name: 'Gothenburg'})
    const [infoTemp, setTemp] = useState(true)
    const [selectedTemp, setSelectedTemp] = useState('')

    
    function handleWeatherCity(e : any) {
        let inputCity = e.target.value
        setSelectedCity(inputCity)
    }

    async function setWeather(e : any) {
        e.preventDefault()
        let newWeather = await WeatherFetcher(selectedCity, infoTemp)
        setCityWeather(newWeather)
        
    }
    
    return (
        <div>
            <form onSubmit={setWeather}>
            <input required onChange={handleWeatherCity} value={selectedCity} type="text" />
            <button type="submit">Ändra stad</button>
            <h1>{cityWeather.name}</h1>
            <h2>Weather: </h2>
            <h1>{cityWeather.weather}</h1>
            <h2>Temperature: </h2>
            <h1>{cityWeather.temperature}</h1>
            <h2>Wind speed:</h2>
            <h1>{cityWeather.wind}</h1>
            </form>
        </div>
    )
}

export default Weather;