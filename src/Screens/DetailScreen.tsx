import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import walking_tour_stops from "../../src/walking_tour_stops.json";
import WalkingTourStopItem from "../List/WalkingTourStopItem";
import RadicalScreen from "../RadicalComponents/RadicalScreen";
import RadicalText from "../RadicalComponents/RadicalText";
import MapView, { MapMarker } from "react-native-maps";


type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

/**
 * Screen displays all available information about a Walking Tour Stop
 * @param route React Native Route
 * @returns Detail Screen React Component
 */

const DetailScreen = ({ route } : Props) : React.ReactElement => {
    const {
        walking_tour_stop
    } = route.params;

    const zoom_level = 13; // This seems to be the sweet spot for oom levels on Android at least

    return (
        <RadicalScreen>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: walking_tour_stop.location.latitude,
                    longitude: walking_tour_stop.location.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                scrollEnabled={false} // Want to center on the specific place
                zoomEnabled={false}
                minZoomLevel={zoom_level}
            >
                <MapMarker coordinate={{
                    latitude : walking_tour_stop.location.latitude,
                    longitude: walking_tour_stop.location.longitude}} />
            </MapView>
            <RadicalText>{walking_tour_stop.id}</RadicalText>
            <RadicalText>{walking_tour_stop.name}</RadicalText>
            <RadicalText>{walking_tour_stop.description}</RadicalText>
            <RadicalText>{walking_tour_stop.location.latitude}</RadicalText>
            <RadicalText>{walking_tour_stop.location.longitude}</RadicalText>
            <RadicalText>{walking_tour_stop.content_file}</RadicalText>
            <RadicalText>{walking_tour_stop.image}</RadicalText>
        </RadicalScreen>
    );
}

const styles = StyleSheet.create({
    map : {
        height: 400
    }
})

export default DetailScreen;