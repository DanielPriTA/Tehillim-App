import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, ListItem, ScrollView, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home'
import Settings from './Settings'
import SettingsList from 'react-native-settings-list';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function SettingsScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerStyle: { height: 66 },
        headerTitleAlign: "center",
        headerTitleStyle: { fontSize: 27 }
    }}
    >
      <Stack.Screen
        name="Settings"
        component={SettingsHome}
      />
      <Stack.Screen
        name="Dark Mode"
        component={DarkMode}
      />
    </Stack.Navigator>
  );
}


function SettingsHome({}) {
  return (
    <View style={{ backgroundColor:'white',flex: 1, margin: 0}}>
        <SettingsList>
            <SettingsList.Item
                title= 'Dark Mode'
                arrowStyle={{tintColor:'black'}}
                itemBoxStyle={{margin:20}}
                titleStyle= {{textAlignVertical:'center', fontSize: 18}}
                onPress={() => navigation.navigate('DarkMode')}
                />
            <SettingsList.Item
            title='Different Example'
            arrowStyle={{tintColor:'black'}}
                itemBoxStyle={{margin:20}}
                titleStyle= {{textAlignVertical:'center', fontSize: 18}}
                />
             <SettingsList.Item
                title= 'Dark Mode'
                arrowStyle={{tintColor:'black'}}
                itemBoxStyle={{margin:20}}
                titleStyle= {{textAlignVertical:'center', fontSize: 18}}
                />
            <SettingsList.Item
            title='Different Example'
            arrowStyle={{tintColor:'black'}}
                itemBoxStyle={{margin:20}}
                titleStyle= {{textAlignVertical:'center', fontSize: 18}}
                borderHide={{}}/>
        </SettingsList>
    </View>
  );
}

function DarkMode({}){
  return(
    <Text>Hello</Text>
  )
}

// 
// export default function SettingsScreen() {
//   return (
//     <Stack.Navigator
//       // initialRouteName="Home"
//       headerMode="Settigs"
//       screenOptions={{
//         headerTintColor: 'white',
//         headerStyle: { backgroundColor: 'tomato' },
//       }}
//     >
//       <Stack.Screen
//         name="Dark Mode"
//         component={DarkMode}
//         options={{
//           title: 'Awesome app',
//         }}
//       />
//       <Stack.Screen
//         name="Aa"
//         component={TextButton}
//         options={{
//           title: 'Aa',
//         }}
//       />
//     </Stack.Navigator>
//   );
// }