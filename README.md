# Radical Walking Tour Grand Rapids

This mobile application was created to bring the people's history of Grand Rapids, Michigan to life. 

Users are able to interact with more than 30 different stops that each tell a piece of the very complex historical struggle for freedom from capitalist oppression that has occurred in Grand Rapids.

## Getting Started

This is a React Native application, so you will need to follow the steps used in the development of React Native. They are described as follows

To start up the metro server
```
npm run start
```

Then to run the app on Android emulator/phone
```
npm run android
```

To run the app on iOS emulator/phone
```
npm run ios
```

## Documentation

The `src/` folder is the main portion of where the application and its business logic lives.

There is also a need to include walking tour stop image files and walking tour stop content files as asset files in the application. I want similar locations for these items since they are related to each other.

### Static Application Files

There are static files stored at two places in this application. The [Android `assets` folder](/android/app/src/main/assets) contains all our static content specific to a walking tour stop. 

This decision was made because at this time the content files also need to be here (This is because the ReactNative build tool (metro) cannot transform .txt files in the same way it transforms json). The [JavaScript Application](/src/static) static files are used for default images and other normal static content  


### `src/` Folder Information
The `RadicalComponents/` folder contains abstractions over base components that contain all the business logic needed for the app.

The `Screens/` folder contains all of the screens that a user can traverse throughout the application.

`colors.ts` describes all the colors that the Application uses in its theming

`types.ts` contains all of the domain specific types

## Made With

* React Native
* Google Maps
