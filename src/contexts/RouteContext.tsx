import React, { createContext, useState, ReactNode, useContext } from 'react';

import routesData from '../data/alpha-routes.json';
import stopsData from '../data/bus-stops.json'

// Importações das rotas
const route112Rod = routesData[1121] as [number, number][];
const route112Gav = routesData[1122] as [number, number][];
const route133LDM = routesData[1331] as [number, number][];
const route133Rod = routesData[1332] as [number, number][];
const route201Cas = routesData[2011] as [number, number][];
const route201SA = routesData[2012] as [number, number][];
const route202Aer = routesData[2021] as [number, number][];
const route202RC = routesData[2022] as [number, number][];
const route415Leb = routesData[4151] as [number, number][];
const route415Usi = routesData[4152] as [number, number][];
const route426JA = routesData[4261] as [number, number][];
const route426Usi = routesData[4262] as [number, number][];
const route539Roc = routesData[5391] as [number, number][];
const route539Lem = routesData[5392] as [number, number][];
const route117CV = routesData[1171] as [number, number][];
const route117Cen = routesData[1172] as [number, number][];



type courseProps = {
  lineC: string;
  directionC: string;
}

type RouteContextData = {
  line: string;
  direction: string;
  dirLatLng: [number, number][];
  stops: {name: string, location: [number, number]}[];
  handleSetCourse: (course: courseProps)=> void;
}

type RouteContextProviderProps = {
  children: ReactNode
}


const RouteContext = createContext({} as RouteContextData);

export function RouteContextProvider({ children }: RouteContextProviderProps) {
  const [line, setLine] = useState<string>("");
  const [direction, setDirection] = useState("");
  const [stops, setStops] = useState<{name: string, location: [number, number]}[]>([])

  const [dirLatLng, setDirLatLng] = useState<[number, number][]>([]);

  function handleSetCourse(course: courseProps) {
    
    setLine(course.lineC);
    setDirection(course.directionC);
    setStops([]);

    switch (course.lineC) {
      case '112':
        if(course.directionC === 'Gávea'){
          setDirLatLng(route112Gav);
          setStops(stopsData[1121] as {name: string, location: [number, number]}[]);
        } else {
          setDirLatLng(route112Rod);
          setStops(stopsData[1122] as {name: string, location: [number, number]}[]);
        }
        break;
      case '133':
        if(course.directionC === 'Rodoviária'){
          setDirLatLng(route133Rod);
          setStops(stopsData[1331] as {name: string, location: [number, number]}[]);
        } else {
          setDirLatLng(route133LDM);
          setStops(stopsData[1332] as {name: string, location: [number, number]}[]);
        }
        break;
      case '201':
        if(course.directionC === 'Castelo'){
          setDirLatLng(route201Cas);
          setStops(stopsData[2011] as {name: string, location: [number, number]}[]);

        } else {
          setDirLatLng(route201SA);
          setStops(stopsData[2012] as {name: string, location: [number, number]}[]);
        }
        break;
      case '202':
        if(course.directionC === 'Aeroporto'){
          setDirLatLng(route202Aer);
          setStops(stopsData[2021] as {name: string, location: [number, number]}[]);
        } else {
          setDirLatLng(route202RC);
          setStops(stopsData[2022] as {name: string, location: [number, number]}[]);
        }
        break;
      case '415':
        if(course.directionC === 'Leblon'){
          setDirLatLng(route415Leb);
          setStops(stopsData[4151] as {name: string, location: [number, number]}[]);
        } else {
          setDirLatLng(route415Usi);
          setStops(stopsData[4152] as {name: string, location: [number, number]}[]);
        }
        break;
      case '426':
        if(course.directionC === 'Jardim de Aláh'){
          setDirLatLng(route426JA);
          setStops(stopsData[4261] as {name: string, location: [number, number]}[]);
        } else {
          setDirLatLng(route426Usi);
          setStops(stopsData[4262] as {name: string, location: [number, number]}[]);
        }
        break;
      case '539':
        if(course.directionC === 'Rocinha'){
          setDirLatLng(route539Roc);
          setStops(stopsData[5391] as {name: string, location: [number, number]}[]);
        } else {
          setDirLatLng(route539Lem);
          setStops(stopsData[5392] as {name: string, location: [number, number]}[]);
        }
        break;
      case '117':
        if(course.directionC === 'Cosme Velho'){
          setDirLatLng(route117CV);
          setStops(stopsData[1171] as {name: string, location: [number, number]}[]);
        } else {
          setDirLatLng(route117Cen);
          setStops(stopsData[1172] as {name: string, location: [number, number]}[]);
        }
        break;
      
      default:
        break;
    }
  }

  
  return (
    <RouteContext.Provider value={{ line, direction, dirLatLng, stops, handleSetCourse }}>
      { children }
    </RouteContext.Provider>
  );
}

export const useRoute = () => {
  return useContext(RouteContext);
}