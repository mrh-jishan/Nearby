import {
    GoogleSignin
} from '@react-native-google-signin/google-signin';
import { NavigationContainer } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { Alert, BackHandler, PermissionsAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { connect } from 'react-redux';
import { successCoords } from '../store/actions/coordsAction';
import AuthStack from './AuthStack';
import UserStack from './UserStack';

const webClientId = '215704965807-o654olrarrlo3s21unjt5jgutvm5p8na.apps.googleusercontent.com'

const rationale = {
    title: "Location Permission",
    message: "App needs access to your location to serve you better.",
    buttonNeutral: "Ask Me Later",
    buttonNegative: "Cancel",
    buttonPositive: "OK"
}

const Routes = ({ loadCoords, isLoggedin }) => {
    const [locationGranted, setLocationGranted] = useState(false);

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
        GoogleSignin.configure({
            webClientId: webClientId,
            iosClientId: webClientId
        });
    }, [webClientId])

    useEffect(() => {
        hasLocationPermission();

        if (locationGranted) {
            Geolocation.getCurrentPosition(({ coords }) => {
                loadCoords({ latitude: coords.latitude, longitude: coords.longitude })
            }, (error) => {
                console.log('Error: ', error.code, error.message);
            },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            );
        }
    }, [hasLocationPermission, locationGranted]);




    useEffect(() => {

    }, []);

    // if (initializing && !user) {
    //     return (
    //         <View style={{
    //             flex: 1,
    //             flexDirection: 'column',
    //             justifyContent: 'center',
    //             alignItems: 'center',
    //             backgroundColor: theme.colors.white,
    //         }}>
    //             <Text style={{
    //                 fontSize: 20,
    //                 fontWeight: "bold"
    //             }}>Loading...</Text>
    //         </View>
    //     );
    // }

    return (
        <NavigationContainer>
            {isLoggedin ? <UserStack /> : <AuthStack />}
        </NavigationContainer>
    );
}


const mapDispatchToProps = dispatch => ({
    loadCoords: (coords) => dispatch(successCoords(coords))
});

const mapStateToProps = ({ auth }) => ({
    isLoggedin: auth.isLoggedin,
});

export default connect(mapStateToProps, mapDispatchToProps)(Routes);