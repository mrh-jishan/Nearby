import { GoogleSignin } from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import AuthStack from './AuthStack';
import UserStack from './UserStack';

const webClientId = '215704965807-o654olrarrlo3s21unjt5jgutvm5p8na.apps.googleusercontent.com'

const Routes = () => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    useEffect(() => {
        GoogleSignin.configure({
            scopes: [
                'https://www.googleapis.com/auth/contacts.readonly',
                'https://www.googleapis.com/auth/user.birthday.read',
                'https://www.googleapis.com/auth/user.gender.read',
                'https://www.googleapis.com/auth/user.phonenumbers.read'],
            webClientId: webClientId
        });
    }, [webClientId])

    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing && !user) {
        return (
            <View style={{ flex: 1 }}>
                <Text>Loading</Text>
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