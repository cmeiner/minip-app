import { BrowserRouter, Route, Routes } from "react-router-dom";
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
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default Layout;
