import { View, Image, ImageSourcePropType, StyleSheet, StyleSheetProperties } from "react-native"

type Props = Omit<React.ComponentProps<typeof Image>, 'source'> & {
    source ?: string
}

/**
 * Does a business logic abstraction of the base React Image component
 * and provides a default image no matter where it is used 
 * @returns {Image} Business level image component
 */
const RadicalImage = ({ source, ...rest }: Props): React.ReactElement => {
    return (
        <Image
            source={
                source ? 
                    source
                    :
                    require("../static/images/calder_plaza_and_la_grand_vitesse.jpg")
            }
            {...rest} />)
}

export default RadicalImage;