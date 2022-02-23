export async function WeatherFetcher(city : string, infoTemp : boolean) {
    
    let cityResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=72ce280222d220a20b10856b83fcdee3`)
    let cityData = await cityResponse.json()
    let lat = cityData[0].lat
    let long = cityData[0].lon

    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=72ce280222d220a20b10856b83fcdee3`)
    let data = await response.json()
    let wind = Math.floor(data.wind.speed)


    let newWeather = {weather: data.weather[0].main, temperature: kelToCF(data.main.temp, infoTemp), wind: wind, name: cityData[0].name}
    return newWeather
}

function kelToCF(temp : number, infoTemp : boolean) {

    if(infoTemp) {
        let Cel = Math.floor(temp - 273.15)
        return `${Cel} C`
    }else {
        let Fahr = (1.8 * (temp - 273)) + 32
        return `${Fahr} F`
    }
}