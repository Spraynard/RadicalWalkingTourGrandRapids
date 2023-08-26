import { useEffect, useState } from "react";
import { Image, ImageProps, ImageRequireSource, ImageSourcePropType, ImageURISource, Platform } from "react-native"
import RNFS from "react-native-fs";

type Props = Omit<ImageProps, 'source'> & {
    walking_tour_stop ?: WalkingTourStop
}


const default_image : ImageURISource = require("../static/images/default_image_not_found.jpg");
const ANDROID_IMAGE_ASSET_BASE = "asset:/images/walking_tour_stops/";
const IOS_IMAGE_ASSET_BASE = "";

/**
 * Does a business logic abstraction of the base React Image component
 * and provides a default image no matter where it is used 
 * @returns {Image} Business level image component
 */
const RadicalImage = ({ walking_tour_stop, ...rest }: Props): React.ReactElement => {
    const image_base = Platform.OS === "android" ?  ANDROID_IMAGE_ASSET_BASE : IOS_IMAGE_ASSET_BASE;
    const [imageSource, setImageSource] = useState<ImageSourcePropType>(walking_tour_stop ? ({uri : image_base + walking_tour_stop.image}) : default_image);
    return (
        <Image source={imageSource}
            onError={(e) => {
                console.error(e.nativeEvent.error);
                setImageSource(default_image)
            }}
            {...rest} />
    )
}

export default RadicalImage;