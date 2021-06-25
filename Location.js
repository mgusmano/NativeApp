import React, { useState } from 'react';
import RNLocation from 'react-native-location';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Image,
  Text
} from 'react-native';

export const Location = ({navigation}) => {
  const [location, setLocation] = useState(null);

  const styles = StyleSheet.create({
    logo: {
      width: 366,
      height: 58,
    },
    textMain: {
      color: 'black',
      fontSize: 28,
      margin: 19
    },
  });

  const permissionHandle = async () => {
    console.log('here')
    let permission = await RNLocation.checkPermission({
      ios: 'whenInUse', // or 'always'
      android: {
        detail: 'coarse' // or 'fine'
      }
    });
    console.log('here2')
    console.log(permission)
    let location;
    if(!permission) {
      permission = await RNLocation.requestPermission({
          ios: "whenInUse",
          android: {
            detail: "coarse",
            rationale: {
              title: "We need to access your location",
              message: "We use your location to show where you are on the map",
              buttonPositive: "OK",
              buttonNegative: "Cancel"
            }
          }
        })
        console.log(permission)
        location = await RNLocation.getLatestLocation({timeout: 100})
        console.log(location, location.longitude, location.latitude,
              location.timestamp)
              setLocation(location)
    } else {
        console.log("Here 7")
        location = await RNLocation.getLatestLocation({timeout: 100})
        console.log(location, location.longitude, location.latitude,
                    location.timestamp)
                    setLocation(location)
    }
  }

  return (
    <SafeAreaView style={{flexDirection: "column",height: 800,padding: 0, backgroundColor: 'white'}}>

      <View style={{ backgroundColor: "white", flex: .15, flexDirection: 'column'}}>
        <Image style={styles.logo} source={require('./SwipeGuide.png')}/>
      </View>

      <View style={{ backgroundColor: "#298784", flex: .07, flexDirection: 'row'}}>


            <Button color='white' title="Get Location" onPress={permissionHandle}/>

      </View>

      <View style={{ backgroundColor: "white", flex: 1, flexDirection: 'row'}}>
        {location !== null &&
        <Text style={styles.textMain} >longitude:{location.longitude} latitude:{location.latitude}</Text>
        }

      </View>


    </SafeAreaView>
  )
}