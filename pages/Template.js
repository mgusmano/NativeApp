import React, { useState, useEffect } from 'react';
import {StyleSheet,SafeAreaView,View,Text} from 'react-native';
//import { Typography, Colors, Spacing } from '../styles'
import { Colors } from '../styles'

export const Template = ({navigation}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    var data = 'header'
    setData(data)
},[])

  return (
    <SafeAreaView style={{flex: 1}}>

      <View style={styles.viewHeader}>
        {data !== null && <Text style={styles.textHeader}>{data}</Text>}
      </View>

      <View style={styles.viewBody}>
        <Text style={styles.textBody}>body</Text>
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