
import React, { createContext, useCallback, useEffect, useState } from 'react';
import { Alert, BackHandler, PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const initCoords = { latitude: 0, longitude: 0 }
const CoordsContext = createContext(initCoords);

const CoordsProvider = ({ children }) => {

  const [coords, setCoords] = useState(initCoords);
  const [locationGranted, setLocationGranted] = useState(false);

  const rationale = {
    title: "Location Permission",
    message: "App needs access to your location to serve you better.",
    buttonNeutral: "Ask Me Later",
    buttonNegative: "Cancel",
    buttonPositive: "OK"
  }

  const hasLocationPermission = useCallback(async () => {
    try {
      const fineGranted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, rationale);
      const coarseGranted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION, rationale);

      if (fineGranted === PermissionsAndroid.RESULTS.GRANTED &&
        coarseGranted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the Location");
        setLocationGranted(true)
      } else {
        console.log("Location permission denied");
        Alert.alert("Access Permission", "Please allow location permission!",
          [
            { text: "OK", onPress: () => BackHandler.exitApp() }
          ],
          { cancelable: false }
        );

      }
    } catch (err) {
      console.warn(err);
    }
  }, [locationGranted])


  useEffect(() => {
    hasLocationPermission();
    
    if (locationGranted) {
      console.log('getting current location: ');
      Geolocation.getCurrentPosition(({ coords }) => {
        console.log('Coords: ', coords);
        setCoords({ latitude: coords.latitude, longitude: coords.longitude })
      }, (error) => {
        console.log('Error: ', error.code, error.message);
      },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    }
  }, [hasLocationPermission, locationGranted]);

  return (
    <CoordsContext.Provider value={coords}>
      {children}
    </CoordsContext.Provider>
  );
}

export { CoordsProvider, CoordsContext };
