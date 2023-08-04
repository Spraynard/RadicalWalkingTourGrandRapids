/**
 * Main screen component that includes base styles and maybe even some functionality
 */

import { View, SafeAreaView, } from "react-native";

type Props = React.PropsWithChildren;

const Screen = ({children, ...props} : Props) => <View>
    {children}
</View>

export default Screen;