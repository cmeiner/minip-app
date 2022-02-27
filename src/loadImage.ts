export async function loadImage(weather : string) {
    let random = await Math.floor((Math.random() * 4) + 1)

    switch(weather) {
        case "Clouds":
            return `./assets/cloudy/cloudy${random}.jpg`
        case "Clear":
            return `./assets/sunny/sunny${random}.jpg`
        case "Rain":
            return `./assets/rainy/rainy${random}.jpg`
        case "Windy":
            return `./assets/windy/windy${random}.jpg`
        case "Snowy":
            return `./assets/snowy/snowy${random}.jpg`
        case "Fog":
            return `./assets/fog/fog${random}.jpg`
        case "Smoke":
            return `./assets/smoke/smoke${random}.jpg`

        default:
            return './assets/images/clear-0.jpg'
    }
}