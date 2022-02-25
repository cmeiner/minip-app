import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { loadImage } from "../loadImage";
import { WeatherFetcher } from "../WeatherFetcher";

function Weather() {


    const [selectedCity, setSelectedCity] = useState('')
    const [cityWeather, setCityWeather] = useState({weather: "Sunny", temperature: "20 C", wind: 1, name: 'Gothenburg', url: "./assets/sunny/sunny1.jpg", deg: 20})
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
        console.log(await loadImage('test'))
        
    }
    
    return (
        <div>
            <form onSubmit={setWeather}>
            <input placeholder="City..." className="input-bordered input" required onChange={handleWeatherCity} value={selectedCity} type="text" />
            <button className="btn block mx-auto my-2" type="submit">Search City</button>
            </form>
            <div className="card w-96 bg-neutral shadow-xl mx-auto text-white mt-2">
                <figure className="px-10 pt-10">
                    <img srcSet={cityWeather.url} alt="Weather Image" className="rounded-xl card-image" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{cityWeather.name}</h2>
                    <p>Weather: {cityWeather.weather}</p>
                    <p>Temperature: {cityWeather.temperature}</p>
                    <p>Windspeed: <FontAwesomeIcon style={{transform: `rotate(${cityWeather.deg}deg)`}} icon={faArrowDown}/> {cityWeather.wind} m/s</p>
                    <div className="card-actions">
                        <button className="btn btn-ghost">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather;