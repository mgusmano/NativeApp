import React from 'react';
import {Svg,G, Path, Text as Textsvg} from 'react-native-svg';

export const Diamond = ({navigation, item, pieSize, color, pieStrokeWidth}) => {
  const getSlice = (slice) => {
    var opacity = 0;
    if (slice.s == 1) { opacity = 0.6}
    switch(slice.p) {
      case (25):
        return ["M0,0 L1, 0 L-0,-1 z",opacity]
      case (50):
        return ["M0,0 L0, 1 L 1, 0 z",opacity]
      case (75):
        return ["M0,0 L0, 1 L-1, 0 z",opacity]
      case (100):
        return ["M0,0 L0,-1 L-1, 0 z",opacity]
      default:
        return ''
    }
  }

  return (
    <G transform={'translate(240,15)'}>
      <Svg width={pieSize} height={pieSize} viewBox="-1 -1 2 2" style="transform: rotate(-0.25turn)">
      {item.status == 'started' &&
        item.data.map((slice,s)=>{
          var [d,f] = getSlice(slice)
          return (
            <Path key={s} d={d} style={{fill:color,stroke:color,fillOpacity:f,strokeWidth:pieStrokeWidth}}/>
          )
      })}
      </Svg>
      {item.trainer == 'yes' &&
      <Textsvg fontSize="1.3" fill="black" x ="-0.4" y ="0.5" width=".4" height=".4" strokeWidth=".001" stroke="black">T</Textsvg>
      }
    </G>
  )
}
