import { MapMarker } from "react-native-maps"

type Props = {
    walking_tour_stop: WalkingTourStop
}

const RadicalMapMarker = ({ walking_tour_stop, ...rest }: Props) => <MapMarker
    coordinate={walking_tour_stop.location}
    description={walking_tour_stop.description}
    title={walking_tour_stop.name}
    {...rest}
/>

export default RadicalMapMarker;