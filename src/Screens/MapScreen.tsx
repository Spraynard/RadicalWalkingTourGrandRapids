import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { Button, StyleSheet, Text, View } from "react-native";
import MapView, { Callout, MapMarker, Marker } from "react-native-maps";
import RadicalMapMarker from "../RadicalComponents/RadicalMapMarker";
import Colors from "../colors";
type Props = NativeStackScreenProps<RootStackParamList, 'Map'>;

const Styles = StyleSheet.create({
    mapStyle: {
        minHeight: 500,
        ...StyleSheet.absoluteFillObject
    }
})
const MapScreen = ({ route, navigation }: Props): React.ReactElement => {
    const { walking_tour_stops } = route.params;
    const marker_latitudes = walking_tour_stops.map((stop) => stop.location.latitude);
    const marker_longitudes = walking_tour_stops.map((stop) => stop.location.longitude);
    const [
        min_latitude,
        min_longitude,
        max_latitude,
        max_longitude
    ] = [Math.min(...marker_latitudes), Math.min(...marker_longitudes), Math.max(...marker_latitudes), Math.max(...marker_longitudes)]

    const midpoint_latitude = (min_latitude + max_latitude) / 2;
    const midpoint_longitude = (min_longitude + max_longitude) / 2;

    return (
        <MapView
            style={Styles.mapStyle}
            initialRegion={{
                latitude: midpoint_latitude,
                longitude: midpoint_longitude,
                latitudeDelta: 0.2,
                longitudeDelta: 0.0421,
            }}>
            {walking_tour_stops.map((walking_tour_stop, index) => {
                return <Marker 
                            key={index + 1}
                            coordinate={walking_tour_stop.location}
                            description={walking_tour_stop.description}
                            title={walking_tour_stop.name} >
                                <Callout onPress={() => {navigation.navigate("Detail", { walking_tour_stop })}}>
                                    <View style={styles.container}>
                                    <Text style={[styles.title, styles.text]}>{walking_tour_stop.name}</Text>
                                    <Text style={[styles.description, styles.text]}>{walking_tour_stop.description}</Text>
                                    <Button title="Details"/>
                                    </View>
                                </Callout>
                        </Marker>
            })}
        </MapView>
    )
}

const styles = StyleSheet.create({
    text : {
        color: Colors.light.card,
        marginBottom: 10
    },
    container : {
        padding: 15
    },
    title : {
        fontWeight: "bold"
    },
    description: {
        fontStyle: "italic"
    }
})

export default MapScreen;