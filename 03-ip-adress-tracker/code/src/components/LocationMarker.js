import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import { useEffect, useState } from "react";



function LocationMarker(props) {
    const coords = props.location
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
        click() {
          map.locate()
        },
        locationfound(e) {
        console.log(e.latlng)
        setPosition(coords)
        map.flyTo(coords, map.getZoom())
        },
      })
  
    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }

export default LocationMarker 
  