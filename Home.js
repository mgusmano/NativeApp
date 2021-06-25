import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Image
} from 'react-native';

export const Home = ({navigation}) => {
  const styles = StyleSheet.create({
    logo: {
      width: 366,
      height: 58,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexDirection: 'column',
      backgroundColor: 'white'
    },
    button: {
      marginTop: 10,
      color: 'black',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });

  return (
    <SafeAreaView style={{flexDirection: "column",height: 800,padding: 0, backgroundColor: 'white'}}>

      <View style={{ backgroundColor: "white", flex: .15, flexDirection: 'column'}}>
        <Image style={styles.logo} source={require('./SwipeGuide.png')}/>
      </View>

      <View style={styles.fixToText}>
        <View style={styles.separator} />
        <Button style={styles.button}  title="My Skills" onPress={() => {navigation.navigate('MySkills', { name: 'Self Eval' })}}/>
        <View style={styles.separator} />
        <Button style={styles.button}  title="Self Evaluation" onPress={() => {navigation.navigate('SelfEval')}}/>
        <View style={styles.separator} />
        <Button style={styles.button}  title="Get Location" onPress={() => {navigation.navigate('Location')}}/>
        <View style={styles.separator} />
      </View>

    </SafeAreaView>
  )
}