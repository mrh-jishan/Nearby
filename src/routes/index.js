import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import AuthStack from './AuthStack';
import { CoordsProvider } from './../CoordsProvider';
import UserStack from './UserStack';


const Routes = () => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    const onAuthStateChanged = (user) => {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) {
        return (
            <View>
                <Text>Loading</Text>
            </View>
        );
    }

    return (
        <CoordsProvider>
            <NavigationContainer>
                {user ? <UserStack /> : <AuthStack />}
            </NavigationContainer>
        </CoordsProvider>
    );
}

export default Routes