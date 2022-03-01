import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [location, setLocation] = useState("");
  const [count, setCount] = useState(1);

  if (navigator && count === 1) {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      let data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=72ce280222d220a20b10856b83fcdee3`
      );
      let dataResponse = await data.json();
      setLocation(dataResponse.name);
      setCount(2);
    });
  }

  return (
    <div className="mb-10 bg-neutral p-4">
      <div className="navbar flex-col lg:flex-row ">
        <div className="navbar-start">
          <NavLink to="/" className="btn animate-pulse text-xl mx-auto lg:mx-0">
            Weather app
          </NavLink>
        </div>
        <div className="navbar-center">
          <NavLink to="/search" className="btn">
            Search Weather
          </NavLink>
          <NavLink to="/" className="btn">
            {location} Weather
          </NavLink>
        </div>
        <div className="navbar-end text-white w-full md:w-1/2">
          <NavLink to="/developers" className="btn text-center mx-auto lg:mx-0">
            Developed by MiMeiner, FrontFelix & PRimate
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
