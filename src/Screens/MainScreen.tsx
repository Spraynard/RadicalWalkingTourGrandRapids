import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import walking_tour_stops from "../../src/walking_tour_stops.json";
import WalkingTourStopItem from "../List/WalkingTourStopItem";
import RadicalScreen from "../RadicalComponents/RadicalScreen";
import { useTheme } from "@react-navigation/native";
import Colors from "../colors";


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
    const walkingTourStopsLength = walkingTourStops.length;
    const {colors, dark} = useTheme();
    return (
        <RadicalScreen>
            <FlatList<WalkingTourStop> 
                data={walkingTourStops}
                renderItem={(info) => (
                    <WalkingTourStopItem 
                        walking_tour_stop={info.item}
                        onPress={() => navigation.navigate("Detail", {
                            walking_tour_stop : info.item
                        })}
                        style={({pressed}) => ({
                            ...styles.listItem,
                            // Background color changed on if the item is pressed
                            backgroundColor : pressed ? 
                                (dark ? Colors.dark.pressed : Colors.light.pressed) 
                                : 
                                colors.background,
                            borderBottomColor : colors.text,
                            // Last item doesn't have a border bottom now
                            borderBottomWidth : (info.index === (walkingTourStopsLength - 1)) ? 0 : styles.listItem.borderBottomWidth
                        })}/>
                )}
                keyExtractor={(item) => item.id}/>
        </RadicalScreen>
    );
}

const styles = StyleSheet.create({
    list : {
        paddingLeft: 15,
        paddingRight: 15
    },
    listItem : {
        borderBottomWidth : StyleSheet.hairlineWidth,
        padding: 15,
        paddingLeft: 15,
        paddingRight: 15
    }
})
export default MainScreen;