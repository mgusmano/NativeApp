import { Path, Text, Rect} from 'react-native-svg';

import React from 'react';


export const Slice = React.memo((props) => {



  const { transform, angle, radius, style, ...rest } = props;
  const r2 = radius
  const dx = r2 * Math.sin(angle)
  const dy = r2 * (1 - Math.cos(angle))
  const d = `M${r2} ${r2}V0a${r2} ${r2} 0 0 1 ${dx} ${dy}z`

  console.log('slice')
  console.log(transform)
  //console.log(style)

//  return (
//     <>
//     <Rect
//               x="0"
//               y="0"
//               width="327"
//               height="290"
//               fill="black"
//               strokeWidth="1"
//               opacity="0.9"
//               stroke="rgb(0,0,0)"
//             />
//       </>
//   )


  return (
    <Path
      stroke="green"
      strokeWidth="2px"
      strokeOpacity="1"
      fill="white"
      transformOrigin="12px 12px"
      transform={transform}
      strokeOpacity="1"
      d={d}
    />
  )



  // return (
  //   <Path
  //     style={style}
  //     className="slice"
  //     onClick={(e) => {
  //       console.log('click')
  //     }}
  //     onMouseEnter={() => console.log('over')}
  //     strokeOpacity="1"
  //     d={d}
  //   />
  // )
})
