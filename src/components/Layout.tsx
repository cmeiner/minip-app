import { BrowserRouter, Route, Routes } from "react-router-dom";

//Already included filename error?
import ErrorBoundary from "./ErrorBoundary";

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
            <Route path="*" element={
              <main>
                <p>There's nothing here!</p>
              </main>}
            />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </div >
  );
}

export default Layout;
