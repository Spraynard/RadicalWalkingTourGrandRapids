import { useState } from "react";
import { Image, ImageProps, ImageSourcePropType, Platform } from "react-native"
import constants from "../constants";
type Props = Omit<ImageProps, 'source'> & {
    walking_tour_stop ?: WalkingTourStop
}

/**
 * Does a business logic abstraction of the base React Image component
 * and provides a default image no matter where it is used 
 * @returns {Image} Business level image component
 */
const RadicalImage = ({ walking_tour_stop, ...rest }: Props): React.ReactElement => {
    const image_base = Platform.OS === "android" ?  constants.ANDROID_IMAGE_ASSET_BASE : constants.IOS_IMAGE_ASSET_BASE;
    const [imageSource, setImageSource] = useState<ImageSourcePropType>(walking_tour_stop ? ({uri : image_base + walking_tour_stop.image}) : constants.DEFAULT_IMAGE);
    return (
        <Image source={imageSource}
            onError={(e) => {
                console.error(e.nativeEvent.error);
                setImageSource(constants.DEFAULT_IMAGE)
            }}
            {...rest} />
    )
}

export default RadicalImage;