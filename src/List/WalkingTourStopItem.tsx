import { StyleSheet, View, Text, Pressable, PressableProps } from "react-native";
import RadicalImage from "../RadicalComponents/RadicalImage";
import {RadicalText, RadicalTextTitle} from "../RadicalComponents/RadicalText";


type Props = PressableProps & {
    walking_tour_stop : WalkingTourStop,
}
/**
 * This component encompasses the general layout of a walking tour stop item if it were in a list.
 * 
 * @param walking_tour_stop all the information for a walking tour stop
 * @returns React Component
 */
const WalkingTourStopItem = ({walking_tour_stop, ...rest} : Props) => (
    <View style={styles.container}>
        <Pressable {...rest}>
            <View>
                <RadicalImage style={styles.image}/>
            </View>
            <View>
                <RadicalTextTitle>{walking_tour_stop.name}</RadicalTextTitle>
                <RadicalText>{walking_tour_stop.description}</RadicalText>
            </View>
        </Pressable>
    </View>
);

const styles = StyleSheet.create({
    container : {
    //     marginTop : 15,
    //     paddingTop: 40,
    //     borderRadius: 10,
    },
    image : {
        height : 100,
        width: 100
    }
})

export default WalkingTourStopItem;