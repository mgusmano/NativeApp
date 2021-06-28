import React, { useState, useEffect } from 'react';
import {StyleSheet,SafeAreaView,View,Text,StatusBar,FlatList} from 'react-native';
//import { Typography, Colors, Spacing } from '../styles'
import { Colors } from '../styles'
import { FlatItem } from './FlatItem';
import { FlatItemSvg } from './FlatItemSvg';
import {Svg,Circle, G, Rect, Line, Path, Image, Text as Textsvg} from 'react-native-svg';

export const Flat = ({navigation}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const DATA = [
      {id: '1',title: 'First Item',},
      {id: '2',title: 'Second Item',},
      {id: '3',title: 'Third Item',},
      {id: '4',title: 'Another Item',},
      {id: '5',title: 'Another Item',},
      {id: '6',title: 'Another Item',},
      {id: '7',title: 'Another Item',},
      {id: '8',title: 'Another Item',},
      {id: '9',title: 'Last Item',},
    ];
    setData(DATA)
  },[])

  const ItemSeparator = () => (
    <View style={styles.item}>
    <Svg width={'100%'} height={'1px'}>
      <Line x1="0" y1="1" x2="100%" y2="1" stroke="black"/>
    </Svg>
    </View>
  )

  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "gray" : "lightgray";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <FlatItemSvg
        item={item}
        onPress={() => setSelectedId(item.id)}
        onLongPress={() => {() => {navigation.navigate('SelfEval')}}}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>

      <View style={styles.viewHeader}>
        <Text style={styles.textHeader}>header</Text>
      </View>

      <View style={styles.viewBody}>
        <Text style={styles.textBody}>body</Text>

        {data !== null &&
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
          ItemSeparatorComponent={ItemSeparator}
        />
        }


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
  textBody: {color: 'black',fontSize: 28,margin: 20},
  textFooter: {color: 'black',fontSize: 28,margin: 10},

  item: {

    padding: 0,
    marginVertical: 10,
    marginHorizontal: 20,
  },
});
