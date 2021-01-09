import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AuthStack from './AuthStack';
import UserStack from './UserStack';

const Routes = () => {
    return (
        <NavigationContainer>
            {/* <AuthStack /> */}
            <UserStack />
        </NavigationContainer>
    );
}

export default Routes