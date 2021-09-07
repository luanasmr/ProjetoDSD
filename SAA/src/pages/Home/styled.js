import React from "react";
import { Map, TileLayer, Marker, Poup } from 'react-leaflet';
const LeafletMap = (props : any): any=>{
const  mapPositions = [11.1271, 78.6569];

return(

  <Map
  class name = "mapa"
   center ={[mapPositions[0], mapPositions=[1]]} zoo={5}>
     <TileLayer
     attribution = '&amp; copy<a href="http://osm.org/copyrigth"OpenStreetMap</a>contributrs'
     url="https:\\{s}.title.openstreetmap.org/{z}/{x}/{y}.png"
     
     />
   </Map>

);





};
export default LeafletMap;


