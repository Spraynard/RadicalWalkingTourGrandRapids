import { StyleSheet, View, Text } from "react-native";
import RadicalImage from "../RadicalComponents/RadicalImage";
import RadicalText from "../RadicalComponents/RadicalText";

/**
 * This component encompasses the general layout of a walking tour stop item if it were in a list.
 * 
 * @param walking_tour_stop all the information for a walking tour stop
 * @returns React Component
 */
const WalkingTourStopItem = (walking_tour_stop : WalkingTourStop) => (
    <View style={styles.container}>
        <View>
            <RadicalImage style={styles.image}/>
        </View>
        <View>
            <RadicalText>{walking_tour_stop.name}</RadicalText>
            <RadicalText>{walking_tour_stop.description}</RadicalText>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container : {
        padding : 10
    },
    image : {
        height : 100,
        width: 100
    }
})

export default WalkingTourStopItem;