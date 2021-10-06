import React, { Component } from 'react';  
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
//import { AddAlarmSharp } from '@material-ui/icons';
//import {getLocation} from './geolocation.js';
import Axios from 'axios';
import api from '../Config/api';
 



export class MapContainer extends Component {
  currentLatitude = '-6.47511';
  currentLongitude = '-35.4286';
  

  state = {
    localizacao: [],
  }

  componentDidMount() {
    this.loadHist();
   }


  loadHist = async () => {
    // passando a página por parâmetro
    const response = await api.get(`/historico`);


    this.setState({ localizacao: response.data });
  }

  constructor(props) {
    super(props);

      
    if("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition( (pos) => { //postagem ao servidor
        this.currentLatitude = pos.coords.latitude;
        this.currentLongitude = pos.coords.longitude;
        const headers = {
          'Content-Type': 'application/json',
        }

        Axios.post('https://saa-back-end-p.herokuapp.com/historico',{ // fazer get pegar posi bd.
           // id aleatório de sessão ( da pessoa logada) 
          longitude:pos.coords.longitude,
          latitude:pos.coords.latitude
          //headers: {"Access-Control-Allow-Origin": "*"}
          
        }, {headers:headers})

        this.loadHist();

      });
    }
  }

  displayMarkers = () => {
    
    var resp = [

    ]


    const { localizacao } = this.state;
    for (var i = 0; i < localizacao.length; i++){
      resp.push(<Marker key={i} id={i} name={'Teste'} title={`Marcador ${i+1}`}  position={{
        lat:  localizacao[i].latitude,
        lng: localizacao[i].longitude
      }}
      >
      </Marker>)

    }


    return resp;

  }

  render() {
    const { localizacao } = this.state;
    
    return (

      <Map
        google={this.props.google}
        zoom={13}
        initialCenter={{ lat: this.currentLatitude, lng: this.currentLongitude }}
      >

        {this.displayMarkers()}
          <InfoWindow>
            
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