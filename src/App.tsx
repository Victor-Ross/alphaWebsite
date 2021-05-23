import React from 'react';
import Routes from './routes';

import { RouteContextProvider } from './contexts/RouteContext';


function App() {
  return (
    <RouteContextProvider>
      <Routes />
    </RouteContextProvider>
  );
}

export default App;
