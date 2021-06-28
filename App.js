import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//https://reactnavigation.org/

const Stack = createStackNavigator();
import { Home } from './pages/Home';
import { MySkills } from './pages/MySkills';
import { SwipeGuide } from './pages/SwipeGuide';
import { SelfEval } from './pages/SelfEval';
import { Location } from './pages/Location';
import { Template } from './pages/Template';
import { Flat } from './pages/Flat';
import { Camera } from './pages/Camera';
import { Dimensions } from './pages/Dimensions';

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }}/>
        <Stack.Screen name="MySkills" component={MySkills} options={{ title: 'My Skills' }}/>
        <Stack.Screen name="SwipeGuide" component={SwipeGuide} options={{ title: 'SwipeGuide' }}/>
        <Stack.Screen name="SelfEval" component={SelfEval} options={{ title: 'Self Evaluation' }}/>
        <Stack.Screen name="Location" component={Location} options={{ title: 'Location' }}/>
        <Stack.Screen name="Template" component={Template} options={{ title: 'Template' }}/>
        <Stack.Screen name="Flat" component={Flat} options={{ title: 'Flat' }}/>
        <Stack.Screen name="Camera" component={Camera} options={{ title: 'Camera' }}/>
        <Stack.Screen name="Dimensions" component={Dimensions} options={{ title: 'Dimensions' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
