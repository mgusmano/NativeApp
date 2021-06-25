import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Image
} from 'react-native';

export const Location = ({navigation}) => {
  const styles = StyleSheet.create({
    logo: {
      width: 366,
      height: 58,
    },
  });

  return (
    <SafeAreaView style={{flexDirection: "column",height: 800,padding: 0, backgroundColor: 'white'}}>

      <View style={{ backgroundColor: "white", flex: .15, flexDirection: 'column'}}>
        <Image style={styles.logo} source={require('./SwipeGuide.png')}/>
      </View>

    </SafeAreaView>
  )
}