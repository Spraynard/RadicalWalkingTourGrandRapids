import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { StyleSheet } from "react-native";
import MapView, {UrlTile} from "react-native-maps";
type Props = NativeStackScreenProps<RootStackParamList, 'Map'>;

const Styles = StyleSheet.create({
  mapStyle: {
    minHeight: 500
  }
})
const MapScreen = ({ navigation }: Props): React.ReactElement => {
  return (
    <MapView
      style={Styles.mapStyle}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}>
    
    </MapView>
  )
}

export default MapScreen;