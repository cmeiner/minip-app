import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./errorBoundary";
import LocationWeather from "./LocationWeather";
import Navbar from "./Navbar";
import SearchWeather from "./SearchWeather";

function Layout() {
  return (
    <div>

      <BrowserRouter>
        <Navbar />
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<LocationWeather />} />
            <Route path="/search" element={<SearchWeather />} />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

export default Layout;
