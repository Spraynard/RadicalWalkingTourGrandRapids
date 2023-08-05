import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { StyleSheet } from "react-native";
import MapView, {MapMarker, UrlTile} from "react-native-maps";
type Props = NativeStackScreenProps<RootStackParamList, 'Map'>;

const Styles = StyleSheet.create({
  mapStyle: {
    minHeight: 500,
    ...StyleSheet.absoluteFillObject
  }
})
const MapScreen = ({ route, navigation }: Props): React.ReactElement => {
  const { marker_locations } = route.params;
  const marker_latitudes = marker_locations.map((location) => location.latitude);
  const marker_longitudes = marker_locations.map((location) => location.longitude);
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
        {marker_locations.map((location, index) => {
          return <MapMarker key={index + 1} coordinate={location}/>
        })}
    </MapView>
  )
}

export default MapScreen;