import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useRef, useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import walking_tour_stops from "../walking_tour_stops";
import WalkingTourStopItem from "../List/WalkingTourStopItem";
import RadicalScreen from "../RadicalComponents/RadicalScreen";
import { RadicalText, RadicalTextHeader } from "../RadicalComponents/RadicalText";
import MapView, { MapMarker, MapMarkerProps } from "react-native-maps";
import RadicalImage from "../RadicalComponents/RadicalImage";
import RNFS from "react-native-fs";


type Props = NativeStackScreenProps<RootStackParamList, 'Detail'>;

/**
 * Screen displays all available information about a Walking Tour Stop
 * @param route React Native Route
 * @returns Detail Screen React Component
 */

const DetailScreen = ({ route }: Props): React.ReactElement => {
    const { walking_tour_stop } = route.params;
    const [walkingTourContent, setWalkingTourContent] = useState("");
    const zoom_level = 13; // This seems to be the sweet spot for oom levels on Android at least
    
    // Here we want to get items in the file system that are for this content
    useEffect(() => {
        RNFS.readFileAssets("content_files/" + walking_tour_stop.content_file)
            .then(result => setWalkingTourContent(result))
            .catch(error => setWalkingTourContent("Whoops something went wrong!"))
    }, [])

    return (
        <RadicalScreen>
            <ScrollView>
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
                        latitude: walking_tour_stop.location.latitude,
                        longitude: walking_tour_stop.location.longitude
                    }}
                        description={walking_tour_stop.description}
                        title={walking_tour_stop.name} />
                </MapView>
                <View style={styles.imageWrapper} >
                    <RadicalImage style={styles.image} />
                </View>
                <RadicalTextHeader>{walking_tour_stop.name}</RadicalTextHeader>
                <RadicalText>{walking_tour_stop.description}</RadicalText>
                <RadicalText>{walkingTourContent}</RadicalText>
            </ScrollView>
        </RadicalScreen>
    );
}

const styles = StyleSheet.create({
    map: {
        height: 300
    },
    imageWrapper: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    imageShadowBorder: {
        shadowColor: "white",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 17
    },
    image: {
        width: "50%",
        height: 300,
        marginBottom: 20,
        marginTop: 40,
    }
})

export default DetailScreen;