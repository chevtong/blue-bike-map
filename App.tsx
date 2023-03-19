import * as React from 'react';
import type {ParamListBase, RouteProp} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Bikes} from './src/screens/Bikes';
import {Parkings} from './src/screens/Parkings';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from './src/utils/colors';

const Tab = createBottomTabNavigator();

const getTabBarIcons = (
  route: RouteProp<ParamListBase, string>,
  color: string,
  size: number,
) => {
  let iconName = '';

  if (route.name === 'Bikes') {
    iconName = 'pedal-bike';
  } else if (route.name === 'Parkings') {
    iconName = 'local-parking';
  } else {
    iconName = 'error';
  }

  return <Icon name={iconName} size={size} color={color} />;
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({color, size}) => getTabBarIcons(route, color, size),
          tabBarLabel: route.name,
          tabBarActiveTintColor: colors.darkerBlue,
          tabBarInactiveTintColor: colors.grey,
          headerTintColor: colors.darkerBlue,
        })}>
        <Tab.Screen name="Bikes" component={Bikes} />
        <Tab.Screen name="Parkings" component={Parkings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}