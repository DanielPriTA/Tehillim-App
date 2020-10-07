import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, ListItem, ScrollView, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home'
import Settings from './Settings'
import SettingsList from 'react-native-settings-list';
import { createStackNavigator } from '@react-navigation/stack'
import { color } from 'react-native-reanimated';
import * as Font from 'expo-font';

const Stack = createStackNavigator();

// const getFonts = () => Font.loadAsync({
//     'Philosopher-Regular': require('./assets/fonts/Philosopher-Regular.ttf')
//   });
  

export default function GroupScreen() {
const [fontsLoaded, setFontsLoaded] =useState(false)
    return (
        <Stack.Navigator
            initialRouteName="Group Tehillim"
            screenOptions={{
                headerStyle: { height: 65 },
                headerStyle: { height: 66 },
                headerTitleAlign: "center",
                headerTitleStyle: { fontSize: 27 }
            }}
        >
            <Stack.Screen
                name="Group Tehillim"
                component={GroupHome}
            />
        </Stack.Navigator>
    );
}

function GroupHome() {
    return (
        <Text style={{ fontFamily:'Phiosopher-Regular',fontSize: 35, color: 'black', marginHorizontal: 45, marginVertical: 100, alignContent: 'center' }}>
            Group mode is in devolpment. Coming Soon!!!
        </Text>
    )
}
