import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Button, FlatList, Text, View, ListRenderItem, ListRenderItemInfo } from "react-native";
import walking_tour_stops from "../../src/walking_tour_stops.json";
import { SafeAreaView } from "react-native-safe-area-context";
import WalkingTourStopItem from "../List/WalkingTourStopItem";


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
        <SafeAreaView>
            <FlatList<WalkingTourStop> 
                data={walkingTourStops}
                renderItem={(info) => <WalkingTourStopItem {...info.item} />} 
                keyExtractor={(item) => item.id}/>
        </SafeAreaView>
    );
}

export default MainScreen;