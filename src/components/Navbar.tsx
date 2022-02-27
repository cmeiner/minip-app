import { useState } from "react";

function Navbar() {

    const [location, setLocation] = useState("")
    const [count, setCount] = useState(1)

    if(navigator && count === 1) {
        navigator.geolocation.getCurrentPosition(async pos => {
            setLocation('En gång')
            // let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=72ce280222d220a20b10856b83fcdee3`)
            // let dataResponse = await data.json()
            // setLocation(dataResponse.name)
            setCount(2)
        })
    }


    return (
        <div className="mb-10 bg-neutral p-4">
            <div className="navbar">
                <div className="navbar-start">
                    <h1 className="btn animate-pulse text-xl">Weather app</h1>
                </div>
                <div className="navbar-center">
                    <button className="btn">Search Weather</button>
                    <button className="btn">{location} Weather</button>
                </div>
                <div className="navbar-end text-white">
                    <h1 className="btn">Developed by MiMeiner, FrontFelix & PRimate</h1>
                </div>
            </div>
        </div>
    )
}

export default Navbar;