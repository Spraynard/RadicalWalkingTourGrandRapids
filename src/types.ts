/**
 * Type for a location in the application
 */
type Location = {
    latitude : number,
    longitude : number
}

/**
 * A singular stop on the walking tour is types to have this
 * information
 */
type WalkingTourStop = {
    id : string,
    name : String,
    location : Location,
    content_file : string,
    description : string,
    image : string
}

/**
 * Specifies domain specific information about the screens used in the 
 * application. 
 */
type RootStackParamList = {
    Main : undefined,
    Map : {
        location : Location
    },
    Detail : undefined
};