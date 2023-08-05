import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import walking_tour_stops from "../../src/walking_tour_stops.json";
import WalkingTourStopItem from "../List/WalkingTourStopItem";
import RadicalScreen from "../RadicalComponents/RadicalScreen";


type Props = NativeStackScreenProps<RootStackParamList, 'Main'>;

/**
 * This will be the main screen that users go to when they
 * start the application up
 * 
 * @param param0 
 * @returns 
 */

const MainScreen = ({ navigation } : Props) : React.ReactElement => {
    const [walkingTourStops] = useState<WalkingTourStop[]>(walking_tour_stops);
    return (
        <RadicalScreen>
            <FlatList<WalkingTourStop> 
                data={walkingTourStops}
                renderItem={(info) => (
                    <WalkingTourStopItem 
                        walking_tour_stop={info.item}
                        onPress={() => navigation.navigate("Detail", {
                            walking_tour_stop : info.item
                        })}/>
                )}
                keyExtractor={(item) => item.id}
                style={styles.list}/>
        </RadicalScreen>
    );
}

const styles = StyleSheet.create({
    list : {
        paddingLeft: 15,
        paddingRight: 15
    }
})
export default MainScreen;