export function kelToCF(temp: number, infoTemp : boolean) {
    if(infoTemp) {
        let Cel = Math.floor(temp - 273.15)
        return `${Cel} °C`
    }else {
        let Fahr = Math.round((1.8 * (temp - 273)) + 32)
        return `${Fahr} °F`
    }
}