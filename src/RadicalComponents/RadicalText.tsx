import { Text, StyleSheet, TextProps } from 'react-native';

type Props = TextProps;

/**
 * Base application text component
 */
const RadicalText = (props : Props) => <Text 
    style={[
        styles.main,
        props.style
    ]}>{props.children}</Text>

const styles = StyleSheet.create({
    main : {
        color : "#000"
    }
})

export default RadicalText;