'use strict';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Image } from 'react-native';
import { RNCamera } from 'react-native-camera';

const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text>Waiting</Text>
  </View>
);

export const Camera = ({navigation}) => {
  const [data, setData] = useState(null);

  const takePicture = async function(camera) {
    const options = { quality: 0.5, base64: true };
    const d = await camera.takePictureAsync(options);
    console.log(d.uri);
    setData(d.uri)
  };

    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.view}>
          <RNCamera
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.off}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
              title: 'Permission to use audio recording',
              message: 'We need your permission to use your audio',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}
          >
            {({ camera, status, recordAudioPermissionStatus }) => {
              if (status !== 'READY') return <PendingView />;
              return (
                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                  <TouchableOpacity onPress={() => takePicture(camera)} style={styles.capture}>
                    <Text style={{ fontSize: 14 }}> SNAP </Text>
                  </TouchableOpacity>
                </View>
              );
            }}
          </RNCamera>

        </View>
        <View style={styles.view}>
          <Image width="%" height="100%"
            style={styles.stretch}
            source={{uri: data}}
          />
        </View>
        <View style={styles.viewFooter}>
        <Button color="black" title="Select this Picture" onPress={() => {navigation.navigate('Home')}}/>
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  stretch: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  view: {backgroundColor: 'lightgray', flex: 1},
  viewFooter: {backgroundColor: 'white', height: 40},
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
