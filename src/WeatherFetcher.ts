import { loadImage } from "./loadImage"

export async function WeatherFetcher(infoTemp : boolean, city? : string) {

    let long = "1"
    let lat = "1"

    if(city === undefined) {
        //let newWeather = [{weather: "Sunny", temperature: "20 C", wind: 1, name: 'Gothenburg', url: "./assets/sunny/sunny1.jpg", deg: 20}]
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async position => {
                lat = position.coords.latitude.toString()
                long = position.coords.longitude.toString()
                let newWeather1 = await getWeather(lat, long, infoTemp)
            })
            console.log('Pos Undefined')
            return await getWeather(lat, long, infoTemp)
        }
        // if (navigator.geolocation) {
        //     navigator.geolocation.getCurrentPosition((pos) => {
        //       let lat = pos.coords.latitude;
        //       let long = pos.coords.longitude;
        //     }


    } else if(city !== undefined){
        let cityResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=72ce280222d220a20b10856b83fcdee3`)
        let cityData = await cityResponse.json()
        lat = cityData[0].lat
        long = cityData[0].lon
        let newWeather = [{weather: "Sunny", temperature: "20 C", wind: 1, name: 'Gothenburg', url: "./assets/sunny/sunny1.jpg", deg: 20}]
        console.log('Pos är defined')
        return newWeather[0]
    }
    

    // let cityResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=72ce280222d220a20b10856b83fcdee3`)
    // let cityData = await cityResponse.json()
    // lat = cityData[0].lat
    // long = cityData[0].lon

    // let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=72ce280222d220a20b10856b83fcdee3`)
    // let data = await response.json()
    // let wind = Math.floor(data.wind.speed)
    // let windDeg = data.wind.deg


    // let newWeather = {weather: data.weather[0].main, temperature: kelToCF(data.main.temp, infoTemp), wind: wind, name: name, url: await loadImage(data.weather[0].main), deg: windDeg}
    // return newWeather
}

function kelToCF(temp : number, infoTemp : boolean) {

    if(infoTemp) {
        let Cel = Math.floor(temp - 273.15)
        return `${Cel} °C`
    }else {
        let Fahr = Math.round((1.8 * (temp - 273)) + 32)
        return `${Fahr} °F`
    }
}


async function getWeather(lat : string, long: string, infoTemp : boolean) {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=72ce280222d220a20b10856b83fcdee3`)
    let data = await response.json()
    let wind = Math.floor(data.wind.speed)
    let windDeg = data.wind.deg
    let name = "testar"

    let newWeather = {weather: data.weather[0].main, temperature: kelToCF(data.main.temp, infoTemp), wind: wind, name: name, url: await loadImage(data.weather[0].main), deg: windDeg}
    return newWeather
}