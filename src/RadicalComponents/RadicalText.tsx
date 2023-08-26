import { Text, StyleSheet, TextProps } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import constants from '../constants';

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

const styles = StyleSheet.create({
    normal: {
        fontSize: constants.FONT_SIZE_BASE
    },
    title: {
        fontSize: constants.FONT_SIZE_BASE * 1.5,
        fontWeight: 'bold'
    },
    header: {
        fontSize: constants.FONT_SIZE_BASE * 2,
        marginTop: 10,
        fontWeight: "bold"
    }
})