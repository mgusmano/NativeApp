import React, { useState, useEffect } from 'react';
import {StyleSheet,SafeAreaView,View,Text, useWindowDimensions, Alert, Button, DevSettings, Platform} from 'react-native';
//import { Typography, Colors, Spacing } from '../styles'
import { Colors } from '../styles'
import { SvgTest } from './SvgTest';

export const Dimensions = ({navigation}) => {
  const window = useWindowDimensions();
  const [data, setData] = useState(null);

  useEffect(() => {

    DevSettings.addMenuItem('Show Secret Dev Screen', () => {
      Alert.alert('Showing secret dev screen!');
    });
    var data = 'header'
    setData(data)
  },[])

  const createThreeButtonAlert = () =>
  Alert.alert(
    "Alert Title",
    "My Alert Msg",
    [
      // {
      //   text: "Ask me later",
      //   onPress: () => console.log("Ask me later pressed")
      // },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );

  return (
    <SafeAreaView style={{flex: 1}}>

      <View style={styles.viewHeader}>
        {data !== null && <Text style={styles.textHeader}>{window.width}-{window.height}</Text>}
      </View>

      <View style={styles.viewBody}>


        <Button color="#298784" title="Alert" onPress={createThreeButtonAlert}/>


        <Text style={styles.value}>OS: {Platform.OS}</Text>
        <Text style={styles.value}>OS Version: {Platform.Version}</Text>
        <Text style={styles.value}>isTV: {Platform.isTV.toString()}</Text>

        {Platform.OS === 'ios' && <>
          <Text style={styles.value}>isPad: {Platform.isPad.toString()}</Text>
        </>}

        <Text>Constants</Text>
        <Text style={styles.value}>
          {JSON.stringify(Platform.constants, null, 2)}
        </Text>

        <SvgTest/>

      </View>

      <View style={styles.viewFooter}>
        <Text style={styles.textFooter}>footer</Text>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  viewHeader: {backgroundColor: Colors.baseColor, flex: .1, flexDirection: 'row'},
  viewBody: {backgroundColor: Colors.panelColor, flex: .8, flexDirection: 'column'},
  viewFooter: {backgroundColor: Colors.baseColor, flex: .1, flexDirection: 'row'},
  textHeader: {color: 'black',fontSize: 28,margin: 10},
  textBody: {color: 'black',fontSize: 28,margin: 10},
  textFooter: {color: 'black',fontSize: 28,margin: 10},
});