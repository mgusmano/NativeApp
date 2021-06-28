import React, { useState, useEffect } from 'react';
import {StyleSheet,SafeAreaView,View,Text} from 'react-native';
import {Svg,G, Rect, Path, Image, Text as Textsvg} from 'react-native-svg';
import { Colors } from '../styles'

export const SvgTest = ({navigation, item, color, pieWidth, pieHeight, pieStrokeWidth}) => {

  return (

    <G transform={'translate(240,35)'}>
      <Svg width={'200px'} height={'100px'}>
        <Textsvg alignmentBaseline="hanging" fontSize="20" fill="black" x ="0" strokeWidth="1" stroke="black">gZZZ</Textsvg>
      </Svg>
    </G>

  )
}

