import { MapContainer, TileLayer } from "react-leaflet";

import LocationMarker from "./LocationMarker";

export const Map = (props) => {
  if (props.location.lng === 0 && props.location.lat === 0) {
    return <div></div>;
  }
  return (
    <MapContainer
      center={[props.location.lat, props.location.lng]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "65vh" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <LocationMarker location={[props.location.lat, props.location.lng]} />
    </MapContainer>
  );
};
