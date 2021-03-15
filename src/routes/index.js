import { GoogleSignin } from '@react-native-community/google-signin';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { theme } from '../core/theme';
import AuthStack from './AuthStack';
import UserStack from './UserStack';

const webClientId = '215704965807-o654olrarrlo3s21unjt5jgutvm5p8na.apps.googleusercontent.com'

const Routes = () => {
    const [initializing, setInitializing] = useState(false);
    const [user, setUser] = useState();

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: webClientId
        });
    }, [webClientId])

    function onAuthStateChanged(user) {
        // setUser(user);
        // if (initializing) setInitializing(false);
    }

    useEffect(() => {
        onAuthStateChanged({})
    }, []);

    if (initializing && !user) {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: theme.colors.white,
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: "bold"
                }}>Loading...</Text>
            </View>
        );
    }

    return (
        <NavigationContainer>
            {user ? <UserStack /> : <AuthStack />}
        </NavigationContainer>
    );
}

export default Routes