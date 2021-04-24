import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import { useState } from "react";
import LocationMarker from "./LocationMarker"


export const Map = (props) => {

  if(props.location.lng == 0 && props.location.lat == 0){
    return <div>qq</div>
  }
  return (
    <MapContainer
      center={[props.location.lat, props.location.lng]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "65vh" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <LocationMarker location={[props.location.lat, props.location.lng]}/>
    </MapContainer>
  );
};
