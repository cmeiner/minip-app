import React from "react";
import "../App.css";
import ErrorBoundary from "./ErrorBoundary";
import Layout from "./Layout";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Layout />
      </ErrorBoundary>
    </div>
  );
}

export default App;
