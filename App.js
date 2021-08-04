import React from 'react';
import HomeScreen from './screens/homeScreen'
import MeteorScreen from './screens/meteorScreen'
import SpaceStationScreen from './screens/spaceStationScreen'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function MyStack()
{
  return(
    <Stack.Navigator initialRouteName = "Home" headerMode = "none">
      <Stack.Screen name = "Home" component = {HomeScreen}/>
      <Stack.Screen name = "SpaceStationScreen" component = {SpaceStationScreen}/>
      <Stack.Screen name = "MeteorScreen" component = {MeteorScreen}/>
    </Stack.Navigator>
  )
}

export default function App()
{
  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  )
}