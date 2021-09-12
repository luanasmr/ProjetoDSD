import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
//import {getLocation} from './geolocation.js';





export class MapContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      stores: [
        { latitude:  -6.47511, longitude:  -35.4286},
        { latitude: -26.9605363, longitude: -52.5335505, local: "Xaxim" },]
    }
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
        lat: store.latitude,
        lng: store.longitude
      }}
      />
    })
  }

  render() {
    return (

      <Map
        google={this.props.google}
        zoom={13}
        initialCenter={{ lat: -27.0922364, lng: -52.6166878 }}
      >

        {this.displayMarkers()}
      </Map>

    );
  }
}

export default GoogleApiWrapper(
  (props) => ({
    apiKey: '',
  }
  ))(MapContainer)

