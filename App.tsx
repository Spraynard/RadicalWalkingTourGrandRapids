/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { createContext, useState } from 'react';
import {
    Button, useColorScheme,
} from 'react-native';

import MainScreen from './src/Screens/MainScreen';
import { NativeStackNavigationProp, createNativeStackNavigator } from '@react-navigation/native-stack';
import { DefaultTheme, DarkTheme, NavigationContainer } from '@react-navigation/native';
import MapScreen from './src/Screens/MapScreen';
import DetailScreen from './src/Screens/DetailScreen';
import walking_tour_stops from "./src/walking_tour_stops.json";
import Colors from './src/colors';

const Stack = createNativeStackNavigator<RootStackParamList>();

// Light Theme
const RadicalTheme = {
    ...DefaultTheme,

}

// Dark Theme
const RadicalDarkTheme = {
    ...DarkTheme,
    colors : {
        ...DarkTheme.colors,
        background : Colors.dark.background,
        card : Colors.dark.card,
    }
}

function App(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <NavigationContainer theme={isDarkMode ? RadicalDarkTheme : RadicalTheme}>
            <Stack.Navigator initialRouteName='Main'>
                <Stack.Screen
                    name="Detail"
                    component={DetailScreen}
                    options={({ route }) => ({
                        title: route.params.walking_tour_stop.name
                    })}
                />
                <Stack.Screen
                    name="Main"
                    component={MainScreen}
                    options={({ navigation }: { navigation: NativeStackNavigationProp<RootStackParamList, "Map"> }) => ({
                        headerRight: () => (
                            <Button title="Map View" onPress={() => navigation.navigate("Map", {
                                walking_tour_stops
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

export default App;
