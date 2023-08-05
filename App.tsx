/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { createContext, useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Button,
  StyleSheet,
} from 'react-native';

import MainScreen from './src/Screens/MainScreen';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import MapScreen from './src/Screens/MapScreen';
import DetailScreen from './src/Screens/DetailScreen';
import walking_tour_stops from "./src/walking_tour_stops.json";

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  const marker_locations : Location[] = walking_tour_stops.map(( item : WalkingTourStop) => {
    return item.location;
  });
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Main'>
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            // THis shows name of the stop on the bar
            options={({route}) => ({
              title : route.params.walking_tour_stop.name
            })}
          />
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={({navigation} : { navigation : NativeStackNavigationProp<RootStackParamList, "Map"> }) => ({
              headerRight : () => (
                <Button title="Map View" onPress={() => navigation.navigate("Map", {
                  marker_locations
                })} />
              )
            })}
          />
          <Stack.Screen
            name="Map"
            component={MapScreen}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },

});

export default App;
