export async function WeatherFetcher(city : string) {
    
    let cityResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=72ce280222d220a20b10856b83fcdee3`)
    let cityData = await cityResponse.json()
    let lat = cityData[0].lat
    let long = cityData[0].lon

    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=72ce280222d220a20b10856b83fcdee3`)
    let data = await response.json()
    let wind = Math.floor(data.wind.speed)


    let newWeather = {weather: data.weather[0].main, temperature: kelToCel(data.main.temp), wind: wind, name: cityData[0].name}
    return newWeather
 
}


function kelToCel(temp : number) {
    return Math.floor(temp - 273.15)
}