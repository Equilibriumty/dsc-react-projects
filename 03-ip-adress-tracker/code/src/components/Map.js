import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export const Map = (props) => {
  if(props.location.lng === undefined && props.location.lat === undefined){
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
      <Marker position={[props.location.lat, props.location.lng]}>
        <Popup>
        Your place
        </Popup>
      </Marker>
    </MapContainer>
  );
};
