import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, ListItem, ScrollView, FlatList} from 'react-native';
import Constants from 'expo-constants';
import SettingsList from 'react-native-settings-list';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import text from './psalms.json'

export default function Home({navigation}) {
  return (
<View style={{flex:1, marginTop:0}}>
     <SettingsList>
          {text.text.map((psalm,i)=>(
            <SettingsList.Item title={`Psalm ${i+1}`}
            onPress={() =>
              navigation.navigate('Psalm',{'psalmNum': i+1})
            }/>
          ))}
    </SettingsList>
    </View>
  )
}

