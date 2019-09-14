import React, { Component } from 'react';
import './App.css';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';

class App extends Component {

  componentDidMount() {
    getEvents().then(response => this.setState({ events: response.events, defaultCity: response.city.city, lat: response.city.lat, lon: response.city.lon }));
  }

  state = {
    events: [],
    page: null,
    defaultCity: '',
    lat: null,
    lon: null
  }

  updateEvents = (lat, lon, page) => {
    if(lat && lon) {
      getEvents(lat, lon, this.state.page).then(response => this.setState({ events: response.events, lat: response.city.lat, lon: response.city.lon }));
    }
    else if (page) {
      getEvents(this.state.lat, this.state.lon, page).then(response => this.setState({ events: response.events, page: page }));
    }
    else {
      getEvents(this.state.lat, this.state.lon, this.state.page).then(response => this.setState({ events: response.events }));
    }
  }

  render() {
    return (
      <div className="App">
        <CitySearch updateEvents={this.updateEvents} defaultCity={this.state.defaultCity} />
        <EventList events={this.state.events} />
        <NumberOfEvents updateEvents={this.updateEvents} numberOfEvents={this.state.events.length} lat={this.state.lat} lon={this.state.lon} />
      </div>
    );
  }
}

export default App;
