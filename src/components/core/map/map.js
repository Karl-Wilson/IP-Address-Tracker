import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet' 
import style from './map.module.css'

const Map = props => {
    return( 
           <MapContainer className={style.mapHeight} center={props.position} zoom={props.zoom? props.zoom: 13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={props.position}>
                    <Popup>
                        Current Location
                    </Popup>
                </Marker>
            </MapContainer>
    )
}

export default Map;