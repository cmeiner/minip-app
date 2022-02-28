import LocationWeather from "./LocationWeather";
import Navbar from "./Navbar";
import SearchWeather from "./SearchWeather";

function Layout() {
  return (
    <div>
      <Navbar />
      <SearchWeather />
      <LocationWeather / >
    </div>
  );
}

export default Layout;
