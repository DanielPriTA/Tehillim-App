import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, ListItem, ScrollView, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsList from 'react-native-settings-list';
import Home from './Home'
import text from './psalms.json'
import Psalm from './Psalm.js'
import Setting from './Settings'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


const Tab = createMaterialBottomTabNavigator();

let Stack = createStackNavigator();

export default function app() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        Color="#e91e63"
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Psalm}
          options={{
            tabBarLabel: 'Settings',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

// function Home() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Psalms" component={Home}
//         />
//         <Stack.Screen name="Psalm" component={Psalm} initialParams={{ psalmNum: 42 }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }


const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
  },
  title: {
    fontSize: 32,
  },
});


{/* <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Psalms" component={Home}
        />
        <Stack.Screen name="Psalm" component={Psalm} initialParams={{ psalmNum: 42 }} />
      </Stack.Navigator>
    </NavigationContainer> */}