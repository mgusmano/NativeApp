import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//https://reactnavigation.org/

const Stack = createStackNavigator();
import { Home } from './Home';
import { MySkills } from './MySkills';
import { SwipeGuide } from './SwipeGuide';
import { SelfEval } from './SelfEval';
import { Location } from './Location';

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }}/>
        <Stack.Screen name="MySkills" component={MySkills} options={{ title: 'My Skills' }}/>
        <Stack.Screen name="SwipeGuide" component={SwipeGuide} options={{ title: 'SwipeGuide' }}/>
        <Stack.Screen name="SelfEval" component={SelfEval} options={{ title: 'Self Evaluation' }}/>
        <Stack.Screen name="Location" component={Location} options={{ title: 'Location' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
