//import * as React, { useState } from 'react';
import React, { useEffect, useState } from 'react';
import {Svg,G, Rect, Path, Text as Textsvg} from 'react-native-svg';
import { View } from 'react-native';

export const SelfEval = () => {
  const [pieStrokeWidth, setPieStrokeWidth] = useState(null);
  const [pieFillOpacity, setPieFillOpacity] = useState(0.2);
  const [pieWidth, setPieWidth] = useState(null);
  const [pieHeight, setPieHeight] = useState(null);
  const [data, setData] = useState(null);

  const [location, setLocation] = useState(null);
  const [rectOpacity, setRectOpacity] = useState(0);

  const getColor = ((start)=>{
    let d = new Date(start);
    var today = new Date();
    var timeinmilisec = d.getTime() - today.getTime();
    var diff = -(Math.ceil(timeinmilisec / (1000 * 60 * 60 * 24)))
    switch(true) {
      case (diff > 180):
        return 'red'
      case (diff > 160):
        return 'goldenrod'
      default:
        return 'green'
    }
  })

  let d = new Date();
  let greendate = d.toLocaleDateString();
  d.setDate(d.getDate() - 180);
  var yellowdate = d.toLocaleDateString();
  d.setDate(d.getDate() - 300);
  var reddate = d.toLocaleDateString();

  var widgetData = {
    data: [
      {
        meta:{type:'skill',id:10},
        data:[
          {
            meta:{type:'student',id: 1,status:'ok',start:greendate,trainer:true, opacity: 0},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],
          },
          {
            meta:{type:'student',id: 2,status:'ok',start:reddate,trainer:false, opacity: 0},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],
          },
          {
            meta:{type:'student',id: 3,status:'ok',start:reddate,trainer:false, opacity: 0},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 4,status:'empty',start:greendate,trainer:false, opacity: 0},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 5,status:'ok',start:yellowdate,trainer:false, opacity: 0},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 6,status:'ok',start:yellowdate,trainer:false, opacity: 0},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:0}],
          },
        ]
      },
      {
        meta:{type:'skill',id:20},
        data:[
          {
            meta:{type:'student',id: 1,status:'empty',start:greendate,trainer:false, opacity: 0},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 2,status:'ok',start:yellowdate,trainer:false, opacity: 0},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],
          },
          {
            meta:{type:'student',id: 3,status:'empty',start:greendate,trainer:false, opacity: 0},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 4,status:'ok',start:reddate,trainer:false, opacity: 0},
            data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 5,status:'empty',start:greendate,trainer:false, opacity: 0},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
          {
            meta:{type:'student',id: 56,status:'empty',start:greendate,trainer:false, opacity: 0},
            data:[{p:25,s:0},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
          },
        ]
      },
    ]
  }

  useEffect(() => {
    var piesize = 50;
    var strokewidth = 1
    setPieWidth(piesize)
    setPieHeight(piesize)
    setPieStrokeWidth(strokewidth/piesize)

    setData(widgetData.data)
},[])

  return (
    <View style={{ backgroundColor: "white", flex: 1, paddingTop: 10, paddingLeft: 20}}>
    {data !== null && data.map((row,r)=>{
      return (
        <Svg key={r} width={'800px'} height={'70px'}>
        {row.data.map((col,c)=>{
          var color = getColor(col.meta.start)
          let translate = `translate(${c*60},0)`
          return (
            <G key={c} transform={translate}>
            {col.data.map((cell,j)=>{
              let y = `translate(5,5)`
              return (
                <G key={j} >

                <G transform={y}>

                  <Svg width={pieWidth} height={pieHeight} viewBox="-1 -1 2 2" style="transform: rotate(-0.25turn)">
                    <Path key="1" d="M0,0 L1, 0 L-0,-1 z" style={{fill:color,stroke:color,fillOpacity:pieFillOpacity,strokeWidth:pieStrokeWidth}}/>
                    <Path key="2" d="M0,0 L0, 1 L 1, 0 z" style={{fill:color,stroke:color,fillOpacity:pieFillOpacity,strokeWidth:pieStrokeWidth}}/>
                    <Path key="3" d="M0,0 L0, 1 L-1, 0 z" style={{fill:color,stroke:color,fillOpacity:pieFillOpacity,strokeWidth:pieStrokeWidth}}/>
                    <Path key="4" d="M0,0 L0,-1 L-1, 0 z" style={{fill:color,stroke:color,fillOpacity:pieFillOpacity,strokeWidth:pieStrokeWidth}}/>
                  </Svg>
                </G>

                <Rect x="0" y="0" width="60" height="60" stroke='black' fill="black" opacity={col.meta.opacity} skill={row.meta.id}
                      onPress={(e) => {
                        setRectOpacity(.5)
                        console.log(e.nativeElement)
                        console.log(e.currentTarget)
                        console.log(e.currentTarget.opacity)
                        //let testid = e.target.getAttribute('testid');
                        //let studentid = e.target.getAttribute('studentid');
                        //e.target.style.opacity = '.5'
                        console.log(widgetData.data[0].data[1].meta.opacity)
                        widgetData.data[r].data[c].meta.opacity = .1
                        console.log(widgetData.data[r].data[c].meta.opacity)
                        setData(widgetData.data)

                      }}
                />
                </G>
              )
            })}
            </G>
          )
        })}
        </Svg>
      )
    })}
  </View>

  )
}