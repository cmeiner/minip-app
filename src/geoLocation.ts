import { kelToCF } from "./KelvinToCelsius"
import { loadImage } from "./loadImage"

export function geoLocation(infoTemp : boolean) {

    if(navigator) {
        return navigator.geolocation.getCurrentPosition(async pos => {
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=72ce280222d220a20b10856b83fcdee3`)
            let data = await response.json()
            let wind = Math.floor(data.wind.speed)
            let windDeg = data.wind.deg
            let name = data.name
        
            let newWeather = {weather: data.weather[0].main, temperature: kelToCF(data.main.temp, infoTemp), wind: wind, name: name, url: await loadImage(data.weather[0].main), deg: windDeg}
            return newWeather
        })
    }

}