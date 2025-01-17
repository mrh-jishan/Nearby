import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { theme } from '../core/theme';
import Chat from '../pages/Chat';
import EditProfile from '../pages/EditProfile';
import Explore from '../pages/Explore';
import Message from '../pages/Message';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: theme.colors.primary,
  },
  headerTintColor: theme.colors.white,
  headerBackTitle: theme.colors.black,
};

const ChatStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Message" component={Message} />
    </Stack.Navigator>
  );
}

const ExploreStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Message" component={Message} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
}


const SettingsStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="UserProfile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();

const UserStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Explore"
      activeColor={theme.colors.white}
      barStyle={{ backgroundColor: theme.colors.primary }}
      tabBarOptions={{
        labelStyle: {
          fontSize: 12
        },
        tabStyle: {
          width: 100
        },
      }}
    >
      <Tab.Screen name="Explore" component={ExploreStackNavigator}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color }) => (
            <Icon name="user-o" color={color} size={20} />
          ),
        }} />

      <Tab.Screen name="Chat" component={ChatStackNavigator}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color }) => (
            <Icon name="user-o" color={color} size={20} />
          ),
        }} />

      <Tab.Screen name="Settings" component={SettingsStackNavigator}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <Icon name="user-o" color={color} size={20} />
          ),
        }} />
    </Tab.Navigator>
  );
}

export default UserStack;
