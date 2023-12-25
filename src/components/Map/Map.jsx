import {
   MapContainer, TileLayer, Marker, Popup
   // eslint-disable-next-line import/no-unresolved
} from "react-leaflet";
// eslint-disable-next-line import/no-unresolved
import L from "leaflet";
// eslint-disable-next-line import/no-unresolved
import "leaflet/dist/leaflet.css";
import { useMemo } from "react";

const Map = () => {
   const icon = L.icon({
      iconUrl: "https://res.cloudinary.com/dfinki0p4/image/upload/v1689285830/marker-icon-2x_cymjwb.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
   });
   const position = useMemo(() => ([50.42182139, 30.55313411]), []);
   return (
      <MapContainer className="map__container" center={position} zoom={16} scrollWheelZoom={false}>
         <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         />
         <Marker icon={icon} position={position} bounceOnZoomEnd={false} bubblingMouseEvents={false}>
            <Popup className="map__popup">
               <h3 className="map__title  ">"Innovation Oasis"</h3>
               <p>вулиця Болсуновська, 13-15</p>
               <p>
                  Графік роботи:
                  <br />
                  пн.-пт.: 10:00 - 18:00
                  <br />
                  сб.: 11:00 - 16:00
                  <br />
                  нд.: вихідний</p>
            </Popup>
         </Marker>
      </MapContainer>
   );
};

export default Map;