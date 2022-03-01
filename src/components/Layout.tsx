import { BrowserRouter, Route, Routes } from "react-router-dom";
import Developers from "./Developers";
import LocationWeather from "./LocationWeather";
import Navbar from "./Navbar";
import SearchWeather from "./SearchWeather";

function Layout() {
  return (
    <div>

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"  element={ <LocationWeather /> } />
        <Route path="/search"  element={ <SearchWeather /> } />
        <Route path="/developers"  element={ <Developers /> } />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default Layout;
