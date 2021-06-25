import React, { useEffect, useState } from 'react';
import RNLocation from 'react-native-location';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Button,
  Text,
} from 'react-native';
import {Svg,G, Rect, Path, Image, Text as Textsvg} from 'react-native-svg';
import cantrain from './trainer.svg';

// RNLocation.configure({
//   distanceFilter: null
// })

export const MySkills = ({navigation}) => {
  const [pieStrokeWidth, setPieStrokeWidth] = useState(null);
  const [pieFillOpacity, setPieFillOpacity] = useState(0.4);
  const [pieWidth, setPieWidth] = useState(null);
  const [pieHeight, setPieHeight] = useState(null);
  const [studentData, setStudentData] = useState(null);
  const [radius, setRadius] = useState(20);

  const getColor = ((start,status)=>{
    if (status == 'not started') return 'lightgray';

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

  var data = {
    operator:{operatorID:1, operatorName:'Joe Smith'},
    items:[
      {
        operator:{operatorID:1,operatorName:'Joe Smith'},
        skill:{skillID:10,skillName:'Core Loading'},
        status:'started',start:greendate,trainer:'yes',
        data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],
      },
      {
        operator:{operatorID:1,operatorName:'Joe Smith'},
        skill:{skillID:20,skillName:'Phase Paper Insertion (VW)'},
        status:'started',start:reddate,trainer:'no',
        data:[{p:25,s:1},{p:50,s:0},{p:75,s:0},{p:100,s:0}],
      },
      {
        operator:{operatorID:1,operatorName:'Joe Smith'},
        skill:{skillID:10,skillName:'Lead Wire Setting'},
        status:'started',start:yellowdate,trainer:'no',
        data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:0}],
      },
      {
        operator:{operatorID:1,operatorName:'Joe Smith'},
        skill:{skillID:30,skillName:'Neutral Tube Insertion'},
        status:'not started',start:yellowdate,trainer:'no',
        data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:0}],
      },
      {
        operator:{operatorID:1,operatorName:'Joe Smith'},
        skill:{skillID:40,skillName:'Neutral Crimp'},
        status:'started',start:greendate,trainer:'yes',
        data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],
      },
      {
        operator:{operatorID:1,operatorName:'Joe Smith'},
        skill:{skillID:50,skillName:'Pre-Lacing'},
        status:'started',start:reddate,trainer:'no',
        data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],
      },
      {
        operator:{operatorID:1,operatorName:'Joe Smith'},
        skill:{skillID:60,skillName:'Lacing'},
        status:'not started',start:greendate,trainer:'no',
        data:[{p:25,s:1},{p:50,s:1},{p:75,s:0},{p:100,s:0}],
      },
      {
        operator:{operatorID:1,operatorName:'Joe Smith'},
        skill:{skillID:70,skillName:'Lead Terminal Crimp)'},
        status:'started',start:greendate,trainer:'no',
        data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:0}],
      },
      {
        operator:{operatorID:1,operatorName:'Joe Smith'},
        skill:{skillID:80,skillName:'Lead Wire Forming'},
        status:'started',start:reddate,trainer:'yes',
        data:[{p:25,s:1},{p:50,s:1},{p:75,s:1},{p:100,s:1}],
      },
    ]
  }

  const getSlice = (slice,status) => {

    var opacity = 0;
    //if (slice.s == 0) { return ''}
    if (slice.s == 1) { opacity = 0.6}
    console.log(slice.s)
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

  useEffect(() => {
    var piesize = 50;
    var strokewidth = 1
    setPieWidth(piesize)
    setPieHeight(piesize)
    setPieStrokeWidth(strokewidth/piesize)
    setStudentData(data)
},[])

  const permissionHandle = async () => {
    console.log('here')
    let permission = await RNLocation.checkPermission({
      ios: 'whenInUse', // or 'always'
      android: {
        detail: 'coarse' // or 'fine'
      }
    });
    console.log('here2')
    console.log(permission)
    let location;
    if(!permission) {
      permission = await RNLocation.requestPermission({
          ios: "whenInUse",
          android: {
            detail: "coarse",
            rationale: {
              title: "We need to access your location",
              message: "We use your location to show where you are on the map",
              buttonPositive: "OK",
              buttonNegative: "Cancel"
            }
          }
        })
        console.log(permission)
        location = await RNLocation.getLatestLocation({timeout: 100})
        console.log(location, location.longitude, location.latitude,
              location.timestamp)
              setLocation(location)
    } else {
        console.log("Here 7")
        location = await RNLocation.getLatestLocation({timeout: 100})
        console.log(location, location.longitude, location.latitude,
                    location.timestamp)
                    setLocation(location)
    }
  }

  return (
    <SafeAreaView style={{flexDirection: "column",height: 800,padding: 0}}>

      <View style={{ backgroundColor: "#298784", flex: .1, flexDirection: 'column'}}>
        <View style={{ backgroundColor: "#298784", flex: 1, flexDirection: 'row'}}>
          <Text style={styles.textMain} >My Skills</Text>
          {/*
            <Button color='white' title="Get Location" onPress={permissionHandle}/>
            <Button color='white' title="Self Evaluation"
              onPress={() => {
                navigation.navigate('SelfEval', { name: 'Self Eval' })
              }}
            /> */}
        </View>

        {/* <View style={{ backgroundColor: "blue", flex: 1, flexDirection: 'row'}}>
          {location !== null &&
          <Text style={styles.textMain} >longitude:{location.longitude} latitude:{location.latitude}</Text>
          }
          {studentData !== null &&
          <Text style={styles.textMain} >name:{studentData.operator.operatorName}</Text>
          }
        </View> */}

      </View>

      <View style={{ backgroundColor: "#298784", flex: .82 }}>
        <ScrollView style={styles.scrollView}>
          <Svg width={'990px'} height={'660px'}>
          {studentData !== null && studentData.items.map((item,i)=>{
            //console.log(item.trainer)
            var color = getColor(item.start, item.status)
            //var trainer = item.trainer;
            //console.log(color)
            var transform = `translate(10,${i*70})`
            return (
              <G key={i} transform={transform} onPress={() => {navigation.navigate('SwipeGuide', { item: item })}}>
                <Rect x ="0" y ="10" height ="60" width ="370" rx ="10" ry ="10" stroke="black" fill="white" />
                <Rect x ="0" y ="10" height ="60" width ="30" rx ="10" ry ="10" fill={color} />
                <Rect x ="20" y ="10" height ="59" width ="270" rx ="0" ry ="0" fill="white" />
                <Textsvg fontSize="18" fill="black" x ="30" y ="38" width="300" stroke="black">{item.skill.skillName}</Textsvg>
                <Textsvg fontSize="14" fill="black" x ="30" y ="58" width="300" stroke="black">status: {item.status}</Textsvg>

                {item.trainer == 'yes' &&
                <>
                <Textsvg fontSize="28" fill="black" x ="3" y ="51" width="30" height="30" stroke="black">T</Textsvg>
                {/* <Textsvg fontSize="28" fill="black" x ="327" y ="51" width="30" height="30" stroke="black">T</Textsvg> */}
                </>
                }

                {item.status == 'started' &&
                <G transform={'translate(310,15)'}>
                  <Svg width={pieWidth} height={pieHeight} viewBox="-1 -1 2 2" style="transform: rotate(-0.25turn)">
                    {item.data.map((slice,s)=>{
                      var [d,f] = getSlice(slice,item.status)
                      return (
                      <Path key={s} d={d} style={{fill:color,stroke:color,fillOpacity:f,strokeWidth:pieStrokeWidth}}/>
                      )
                    })}
                  </Svg>
                  {item.trainer == 'yes' &&
                  <Textsvg fontSize="1.3" fill="black" x ="-0.4" y ="0.5" width=".4" height=".4" strokeWidth=".001" stroke="black">T</Textsvg>
                  }
                </G>
                }

              </G>
            )
          })}
          </Svg>
        </ScrollView>
      </View>

      <View style={{ backgroundColor: "#298784", flex: .02 }}>
        <Text style={styles.textMain}></Text>
      </View>
      {/* <Circle r="1" cx="0" cy="0" fill={pieFillColor} /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionMain: {
    marginTop: 32,
    paddingHorizontal: 24,
    backgroundColor: 'yellow',
    flexDirection: 'column'
  },
  textMain: {
    color: 'white',
    fontSize: 32,
    margin: 19
  },
  scrollView: {
    backgroundColor: 'lightgray',
    marginHorizontal: 0,
  },
});
