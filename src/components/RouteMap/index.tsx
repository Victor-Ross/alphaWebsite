import React, { useEffect } from 'react';
import { Map, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import busStopImg from '../../images/ponto-de-onibus.png';

import { useRoute } from '../../contexts/RouteContext';

import styles from './styles.module.scss';
import 'leaflet/dist/leaflet.css';


export function RouteMap() {
  const { dirLatLng, stops } = useRoute();

  useEffect(() => {
    console.log("Mudou")
  }, [dirLatLng]);

  const mapIcon = Leaflet.icon({
    iconUrl: busStopImg,
    iconSize: [35, 35],
    iconAnchor: [17.5, 35],
    popupAnchor: [0, -35]
  });

  return (
    <div className={styles.mapPageContainer}>
      <section className={styles.map}>
        <Map 
          center={[-22.956560, -43.203299]}
          zoom={13}
          maxZoom={19}
          style={{ width: '100%', height: '100%' }}
        >
          <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {/* <Circle center={[-22.965723, -43.218020]} radius={200} /> */}
          {/* <CircleMarker center={[-22.965723, -43.218020]} radius={20}>
            <Popup>This is my first popup</Popup>
          </CircleMarker> */}
          <Polyline positions={dirLatLng} color="red"/>
            { stops.map(stop => {
                return (
                <Marker
                key={stop.name} 
                icon={mapIcon}
                position={stop.location}
                >
                  <Popup closeButton={false} minWidth={240} maxWidth={240} className={styles.routePopup}>
                    <span style={{ fontSize:'1.1rem', fontWeight: 'bold' }}>{stop.name}</span>
                  </Popup>
                </Marker>
            )
            }) }
        </Map>
      </section>
    </div>
  );
}