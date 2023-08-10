import { Text, StyleSheet, TextProps } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

type Props = TextProps;

/**
 * Base application text component
 */
export const RadicalText = (props: Props) => <Text
    style={[
        styles.normal,
        props.style
    ]}>{props.children}</Text>

export const RadicalTextHeader = (props: Props) => <RadicalText
    style={styles.header} {...props} />

export const RadicalTextTitle = (props: Props) => <RadicalText
    style={styles.title} {...props} />

const fontSizeBase = 20;
const styles = StyleSheet.create({
    normal: {
        fontSize: fontSizeBase
    },
    title: {
        fontSize: fontSizeBase * 1.5,
        fontWeight: 'bold'
    },
    header: {
        fontSize: fontSizeBase * 2,
        marginTop: 10,
        fontWeight: "bold"
    }
})