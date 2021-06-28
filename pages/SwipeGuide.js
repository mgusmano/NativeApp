import * as React from 'react';
import { WebView } from 'react-native-webview';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';

export const SwipeGuide = ({ route, navigation }) => {
  const { item } = route.params;

  const styles = StyleSheet.create({
    textMain: {
      color: 'white',
      margin: 10,
      fontSize: 24
    },
    textHeader: {
      color: 'white',
      margin: 5,
      fontSize: 24
    },
  });

  return (
  <SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>

    <View style={{ backgroundColor: "#298784", flex: .15 }}>

      <View style={{ backgroundColor: "#298784", flex: 1 }}>
        <Text style={styles.textHeader}>{item.skill.skillName} - {item.operator.operatorName}</Text>
      </View>

      <View style={{ backgroundColor: "#298784", flex: 1 }}>
        <Text style={styles.textHeader}>status: {item.status}, trainer: {item.trainer}</Text>
      </View>

    </View>

    <View style={{ backgroundColor: "#298784", flex: .83 }}>
        <WebView
          source={{ uri: 'https://app.swipeguide.com/guide/multipacker-ocme/getting-started/copy%20500e%20of%20prepare-the-machine' }}
          style={{ marginTop: 0 }}
        />
    </View>

    <View style={{ backgroundColor: "#298784", flex: .02 }}>
        <Text style={styles.textMain}></Text>
      </View>

  </SafeAreaView>
  )
}

