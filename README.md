# Blue Bike App

**Description**

This app shows you the amount of available BlueBike in Ghent Dampoort and Ghent Sint Pieters stations and a list of parking slots with more than 50% availability in Ghent. 

### Bikes Screen 
- Amount of available and total Bluebike in Ghent Dampoort and Ghent Sint Pieters stations.
- Long press the station's card to copy the name of the station.

### Parkings Screen 
- List out the parking stations with more than 50% available spots.
- Sort the parking stations in ascending order. 
- Tap the station's card to open the Google Maps URL.


---

## Installation
- `npm install` (`--legacy-peer-deps`) Add legacy-peer-deps flag if needed
- `cd ios` Visit to the ios folder
- `pod install` Install the required dependencies

- Navigate to the root of the project and run the followings:
- `npx react-native start`
- `npx react-native run-ios` Build the iOS App and run it in iOS Simulator
- `npx react-native run-android` Build the Android App and run it in Android emulator

---

#### API Details:
https://data.stad.gent/api/v1/console/datasets/1.0/search/