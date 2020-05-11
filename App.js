import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, ListItem, ScrollView, FlatList } from 'react-native';
import Constants from 'expo-constants';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsList from 'react-native-settings-list';
import text from './psalms.json'
import Psalm from './Psalm.js'






export default function app() {
  return (
    <NavigationContainer>
    <View style={{flex:1, marginTop:30}}>
     <SettingsList>
        	<SettingsList.Header headerText='Psalms' headerStyle={{color:'grey', fontSize:25, textAlign:"center"}}/>
          {text.text.map((psalm,i)=>(
            <SettingsList.Item title={`Psalm ${i+1}`}
            onPress={() =>
              this.prop.navigation.navigate('Psalm')
            }/>
          ))}
    </SettingsList>
    </View>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
  },
  title: {
    fontSize: 32,
  },
});
