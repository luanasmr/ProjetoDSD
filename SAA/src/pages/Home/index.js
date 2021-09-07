import React, { Component, useRef } from 'react';
import { Map,  Marker } from 'google-maps-react';
import Demo from './styled.jsx';

const PegarLocalizacao = () => {
    const innerRef = useRef();

    const getLocation = () => {
        innerRef.current && innerRef.current.getLocation();
    };

    return (
        <article style={{ textAlign: "center" }}>
            {/* eslint-disable-next-line no-console*/}
            <Demo  onError={(error) => console.log(error)} ref={innerRef} />
            <button
                className="pure-button pure-button-primary"
                onClick={getLocation}
                type="button"
            >
                Get location
            </button>
        </article>
    );
}
export default PegarLocalizacao;


export class MapContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      stores: [
        { longitude: getLocation.longitude.local },
        { latitude:getLocation.latitude.local },]
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
        zoom={7}
        initialCenter={{ lat: -27.0922364, lng: -52.6166878 }}
      >

        {this.displayMarkers()}
      </Map>

    );
  }
}


/*export default GoogleApiWrapper(
  (props) => ({
    apiKey: 'AQUI VAI A SUA KEY',
  }
  ))(MapContainer)*/
