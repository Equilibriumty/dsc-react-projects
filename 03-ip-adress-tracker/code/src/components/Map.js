import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export const Map = (props) => {
  console.log(props.location.lat, props.location.lng);
  return (
    <MapContainer
      center={[0, 0]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "65vh" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  );
};
