
import Geolocation from '@react-native-community/geolocation';
import React, { createContext, useEffect, useState } from 'react';

const CoordsContext = createContext(undefined);

const CoordsProvider = ({ children }) => {

  const [coords, setCoords] = useState({ latitude: 0, longitude: 0 });

  useEffect(() => {
    Geolocation.getCurrentPosition(({ coords }) => {
      setCoords({ latitude: coords.latitude, longitude: coords.longitude })
      console.log('coords from routes: ', coords);
    }, error => {
      console.log('error geo location: ', error);
    })
  }, []);

  return (
    <CoordsContext.Provider value={coords}>
      {children}
    </CoordsContext.Provider>
  );
}

export { CoordsProvider, CoordsContext };
