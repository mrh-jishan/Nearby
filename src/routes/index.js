import { GoogleSignin } from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { CoordsProvider } from './../CoordsProvider';
import AuthStack from './AuthStack';
import UserStack from './UserStack';

const webClientId = '215704965807-o654olrarrlo3s21unjt5jgutvm5p8na.apps.googleusercontent.com'

const Routes = () => {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    const onAuthStateChanged = (user) => {
        setUser(user);
        if (initializing) setInitializing(false);
    }

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

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
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