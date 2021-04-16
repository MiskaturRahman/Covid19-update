import './App.css';
import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';
import logo from './image.png';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }


  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }


  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  }


  render() {
    const { data, country } = this.state;

    return (
      <div className="container">
        <img src={logo} className="image" alt="" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}

export default App;