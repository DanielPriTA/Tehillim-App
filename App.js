import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, ListItem, ScrollView, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Home.js'
import SettingsScreen from './Settings.js'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Psalm from './Psalm';
import Icon from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import GroupScreen from './Group';

const Tab = createBottomTabNavigator();

export default function App() {
return (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarLabel: 'Tehillim',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book-open-page-variant" color={'black'} size={25} />
          ),
        }}
      />
      <Tab.Screen name="Group" component={GroupScreen}
        options={{
          tabBarLabel: 'Group',
          tabBarIcon: ({ color, size, }) => (
            <MaterialCommunityIcons name="account-group" color={'black'} size={25} />
          ),
        }}
      />
      <Tab.Screen name="Settings" component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size, }) => (
            <MaterialCommunityIcons name="settings" color={'black'} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);
}


// const [fontsLoaded, setFontsLoaded]=useState(false);

// if (fontsLoaded) {
//   return (
//     <HomeScreen />
//   );
// } else {
//   return (
//     <AppLoading
//     startAsync={getFonts}
//     onFinish={() => setFontsLoaded(true)}
//     />
//   )
// }


// import 'react-native-gesture-handler';

// import React from 'react';
// import { StyleSheet, Button, View, SafeAreaView, Text, Alert, ListItem, ScrollView, FlatList } from 'react-native';
// import Constants from 'expo-constants';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import SettingsList from 'react-native-settings-list';
// import Home from './Home'
// import text from './psalms.json'
// import Psalm from './Psalm.js'

// const Stack = createStackNavigator();

// export default function app() {
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

// const styles = StyleSheet.create({
//   item: {
//     backgroundColor: '#f9c2ff',
//   },
//   title: {
//     fontSize: 32,
//   },
// });
