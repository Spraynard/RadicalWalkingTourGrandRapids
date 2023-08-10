/**
 * Main screen component that includes base styles and maybe even some functionality
 */

import { SafeAreaView, useColorScheme } from "react-native";
import Colors from "../colors";

type Props = React.PropsWithChildren;

const RadicalScreen = ({ children, ...props }: Props) => {
    return (<SafeAreaView style={{ height : "100%" }}>
        {children}
    </SafeAreaView>)
}

export default RadicalScreen;