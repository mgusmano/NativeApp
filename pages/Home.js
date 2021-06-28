import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Image,
  Text,
  TouchableOpacity,
  Pressable
} from 'react-native';
import {Svg,Circle} from 'react-native-svg';

export const Home = ({navigation}) => {

  return (
    <SafeAreaView style={{flex: 1,padding: 0, backgroundColor: 'white'}}>

      <View style={{ backgroundColor: "white", height: 70, flexDirection: 'column'}}>
        <Image style={styles.logo} source={require('../resources/images/SwipeGuide.png')}/>
      </View>

      <View style={styles.fixToText}>
        <Button color="blue" title="My Skills" onPress={() => {navigation.navigate('MySkills', { name: 'Self Eval' })}}/>
        {/* <Pressable onPress={() => {navigation.navigate('MySkills', { name: 'Self Eval' })}}>
            <Svg width={'990px'} height={'20px'}>
              <Circle r="60" cx="90" cy="60" fill='red' />
            </Svg>
            <Text style={styles.text} color="white">My button</Text>
        </Pressable> */}
        <View style={styles.separator} />
        <Button style={styles.button}  title="Flat" onPress={() => {navigation.navigate('Flat')}}/>
        <View style={styles.separator} />
        <Button style={styles.button}  title="Self Evaluation" onPress={() => {navigation.navigate('SelfEval')}}/>
        <View style={styles.separator} />
        <Button style={styles.button}  title="Get Location" onPress={() => {navigation.navigate('Location')}}/>
        <View style={styles.separator} />
        <Button style={styles.button}  title="Template" onPress={() => {navigation.navigate('Template')}}/>
        <View style={styles.separator} />
        <Button style={styles.button}  title="Camera" onPress={() => {navigation.navigate('Camera')}}/>
        <View style={styles.separator} />
        <Button style={styles.button}  title="Dimensions" onPress={() => {navigation.navigate('Dimensions')}}/>

      </View>

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  logo: {
    width: 366,
    height: 58,
  },
  fixToText: {
    flex: .7,
    padding: 20,
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  text: {
    color: 'white'
  },
  button: {
    margin: 0,
    height: 100,
    color: 'black',
    backgroundColor: 'green'
  },
  separator: {
    marginVertical: 5,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
