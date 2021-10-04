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

    //console.log(this.props);
    console.log(response);

    this.setState({ localizacao: response.data });
  }

  constructor(props) {
    super(props);

      
    if("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition( (pos) => { //postagem ao servidor
        this.currentLatitude = pos.coords.latitude;
        this.currentLongitude = pos.coords.longitude;
        console.log(pos);
        const headers = {
          'Content-Type': 'application/json',
        }

        Axios.post('http://localhost:4000/historico',{ // fazer get pegar posi bd.
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
    // var arr = [ // sai arr vira axios do array do servd.
    //   {"lat":-6.4779144, "lng":-35.4370787},
    //   {"lat":-6.4787770052454885, "lng":-35.43456610606472},
    // ]

    var resp = [

    ]

    // for (var i = 0; i < arr.length; i++){
    //   resp.push(<Marker key={i} id={i} name={'Teste'} title={`Marcador ${i+1}`}  position={{
    //     lat:  arr[i]["lat"],
    //     lng: arr[i]["lng"]
    //   }}
    //   >
    //   </Marker>)

    // }

    const { localizacao } = this.state;

    console.log("TESTANDO");
    console.log(localizacao);
    for (var i = 0; i < localizacao.length; i++){
      resp.push(<Marker key={i} id={i} name={'Teste'} title={`Marcador ${i+1}`}  position={{
        lat:  localizacao[i].latitude,
        lng: localizacao[i].longitude
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
    const { localizacao } = this.state;
    console.log(localizacao);
    console.log("TESTE");
    // if(localizacao[0]){
    //   const {latitude} = (localizacao[0]);
    //   console.log(localizacao[0].latitude);
    // }
    
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