import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { theme } from '../core/theme';
import Chat from '../pages/Chat';
import Explore from '../pages/Explore';
import Settings from '../pages/Settings';

const Tab = createMaterialBottomTabNavigator();

const UserStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Explore"
      activeColor={theme.colors.white}
      // inactiveColor="#3e2465"
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
      <Tab.Screen name="Explore" component={Explore}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color }) => (
            <Icon name="user-o" color={color} size={20} />
          ),
        }} />

      <Tab.Screen name="Chat" component={Chat}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color }) => (
            <Icon name="user-o" color={color} size={20} />
          ),
        }} />

      <Tab.Screen name="Settings" component={Settings}
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
