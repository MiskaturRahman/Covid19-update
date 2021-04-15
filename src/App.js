import './App.css';
import React from 'react';

import { Cards, Chart, CountryPicker } from './components';

function App() {
  return (
    <div className="App">
      <h1>covid19!!</h1>
      <Cards />
      <Chart />
      <CountryPicker />
    </div>
  );
}

export default App;
