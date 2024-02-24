import React from 'react'
import L from "leaflet"



import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Map = () => {
    const position = [36.45438708419574, 10.743855497281253]
  return (
    <div class="para">
        Carte map
      <div class="div2">
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
          </div>
          </div>
          
  )
}
let defaultIcon = L.icon({
    iconUrl : "https://unpkg.com/leaflet@1.6.0/dist/images/marker-icon.png",
    iconSize : [25, 41],
  });
  L.Marker.prototype.options.icon = defaultIcon;

export default Map