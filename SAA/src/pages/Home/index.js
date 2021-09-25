import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
//import { AddAlarmSharp } from '@material-ui/icons';
//import {getLocation} from './geolocation.js';
import Axios from 'axios';





export class MapContainer extends Component {
  currentLatitude = '-6.47511';
  currentLongitude = '-35.4286';

  constructor(props) {
    super(props);

    this.state = {
      stores: [
        // { latitude:  -6.47511, longitude:  -35.4286},a
        // { latitude: -26.9605363, longitude: -52.5335505, local: "Xaxim" },
      ]
    }
    
    if("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition( (pos) => { //postagem ao servidor
        this.currentLatitude = pos.coords.latitude;
        this.currentLongitude = pos.coords.longitude;
        console.log(pos);
        Axios.post('http://localhost:4000/users/',{ // fazer get pegar posi bd.
          id:123, // id aleatório de sessão ( da pessoa logada) 
          latitude:65656, //pos.coords.latitude
          longitude:65656, // pos.coords.latitude
          //headers: {"Access-Control-Allow-Origin": "*"}
          
        })
      });
    }
  }

  displayMarkers = () => {
    var arr = [ // sai arr vira axios do array do servd.
      {"lat":-6.4779144, "lng":-35.4370787},
      {"lat":-6.4787770052454885, "lng":-35.43456610606472},
    ]

    var resp = [

    ]

    for (var i = 0; i < arr.length; i++){
      resp.push(<Marker key={i} id={i} name={'Teste'} title={'The marker`s title will appear as a tooltip.'}  position={{
        lat:  arr[i]["lat"],
        lng: arr[i]["lng"]
      }}
      >
      </Marker>)

    }

    return resp;
    //   return [<Marker key={1} id={1} position={{
    //     lat: this.currentLatitude,
    //     lng: this.currentLongitude
    //   }}
    //   ></Marker>,

    //   <Marker key={1} id={1} position={{
    //     lat:  -6.4779144,
    //     lng: -35.4370787
    //   }}
    //   ></Marker>
    // ]
  }

  render() {
    return (

      <Map
        google={this.props.google}
        zoom={13}
        initialCenter={{ lat: this.currentLatitude, lng: this.currentLongitude }}
      >

        {this.displayMarkers()}
          <InfoWindow>
            <div>
              <h4> Teste2 </h4> 
            </div>
          </InfoWindow>
      </Map>

    );
  }
}

export default GoogleApiWrapper(
  (props) => ({
    apiKey: 'AIzaSyDT-VIUQmnhKmkLF2ylVGfJlw9Sa9xoN64',
  }
  ))(MapContainer)
  