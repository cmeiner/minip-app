import React from 'react';
import '../App.css';
import Layout from './Layout';
import Navbar from './Navbar';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <Layout/>
      <Navbar/>
      <Weather />
    </div>
  );
}

export default App;
