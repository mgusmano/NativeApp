import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity,Pressable} from 'react-native';
import {Svg,Circle, G, Rect, Path, Image, Text as Textsvg} from 'react-native-svg';

export const FlatItemSvg = ({ item, onPress, onLongPress, backgroundColor, textColor }) => (
  <Pressable onPress={onPress} onLongPress={onLongPress} style={[styles.item, backgroundColor]}>
    <Svg width={'100%'} height={'60px'}>

      <Rect x="0" y="0" height="60px" width="100%" fill='white' />
      <Circle r="10" cx="10" cy="10" fill='red' />
    </Svg>
    {/* <Text style={[styles.title, textColor]}>{item.title}</Text> */}
  </Pressable>
);

const styles = StyleSheet.create({
  item: {
    padding: 2,
    marginVertical: 5,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 32,
  },
});