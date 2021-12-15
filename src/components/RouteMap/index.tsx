import React, { useEffect, useState } from 'react';
import { Map, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import { api } from '../../services/api';

import busStopImg from '../../images/ponto-de-onibus.png';
import busIcon from '../../images/busIcon.png';

import { useRoute } from '../../contexts/RouteContext';

import styles from './styles.module.scss';
import 'leaflet/dist/leaflet.css';
import { clearInterval, setInterval } from 'timers';



export function RouteMap() {
  const myArray: any[][] = [['', 0, 0, 0, 0]];
  const { dirLatLng, stops, line } = useRoute();
  const [carsPositions, setCarsPositions] = useState(myArray);
  const [directionsAux, setDirectionsAux] = useState([['', 0, 0, 0, 0]]);



  useEffect(() => {
    const firstCall = async () => {
      const response = await api.get(`https://salty-plateau-74394.herokuapp.com/https://jeap.rio.rj.gov.br/dadosAbertosAPI/v2/transporte/veiculos/onibus/${line}`);
      setDirectionsAux(response.data.data);
      setCarsPositions(response.data.data);
    }
    firstCall();
    const intervalData = setInterval(async () => {
      const response = await api.get(`https://salty-plateau-74394.herokuapp.com/https://jeap.rio.rj.gov.br/dadosAbertosAPI/v2/transporte/veiculos/onibus/${line}`);
      console.log(response);
      setCarsPositions(response.data.data);
      setDirectionsAux(response.data.data);
    }, 10000);

    return () => clearInterval(intervalData);
    
  }, [line]);


  const mapIconMarker = Leaflet.icon({
    iconUrl: busStopImg,
    iconSize: [35, 35],
    iconAnchor: [17.5, 35],
    popupAnchor: [0, -35]
  });

  const busIconMarker = Leaflet.icon({
    iconUrl: busIcon,
    iconSize: [35, 35],
    iconAnchor: [20, 10],
    popupAnchor: [1, -49]
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
          
            {/* { stops.map(stop => {
                return (
                <Marker
                key={stop.name} 
                icon={mapIconMarker}
                position={stop.location}
                >
                  <Popup closeButton={false} minWidth={240} maxWidth={240} className={styles.routePopup}>
                    <span style={{ fontSize:'1.1rem', fontWeight: 'bold' }}>{stop.name}</span>
                  </Popup>
                </Marker>
            )
            }) } */}
            <Polyline  positions={dirLatLng} color="red"/>
            {/* {
              directionsAux.map(carAuxArray => {
                carAuxArray.filter((carAux) => {
                  
                })
              })
            } */}
            {
              carsPositions.map(car => {
                return(
                  <Marker
                    key={car[1]}
                    icon={busIconMarker}
                    position={[car[3], car[4]]}
                  >
                  </Marker>
                )
              })
            }
        </Map>
      </section>
    </div>
  );
}