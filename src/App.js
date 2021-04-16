import './App.css';
import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';


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
    console.log(fetchedData);
    //fetch data 
    //set state
  }


  render() {
    const { data } = this.state;

    return (
      <div className="container">
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart />
      </div>
    )
  }
}

export default App;