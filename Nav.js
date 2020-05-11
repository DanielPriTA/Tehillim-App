import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Psalm from './Psalm'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
        <Stack.Screen
          name="Psalm"
          component={Psalm} 
        />
    </NavigationContainer>
  );
}

export default App;
  