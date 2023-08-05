/**
 * Main screen component that includes base styles and maybe even some functionality
 */

import { View, SafeAreaView, useColorScheme, } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

type Props = React.PropsWithChildren;

const RadicalScreen = ({ children, ...props }: Props) => {
    const isDarkMode = useColorScheme() === 'dark';
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    return (<SafeAreaView style={[backgroundStyle, { height : "100%" }]}>
        {children}
    </SafeAreaView>)
}

export default RadicalScreen;