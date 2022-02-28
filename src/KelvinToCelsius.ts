export function kelToCF(temp: number, infoTemp : boolean) {
    return infoTemp ? `${Math.floor(temp - 273.15)} °C` : `${Math.floor(temp * 9/5 - 459.67)} °F`;
}