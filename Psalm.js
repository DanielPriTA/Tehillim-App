import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, ListItem, ScrollView, FlatList } from 'react-native';
import Constants from 'expo-constants';
import text from './psalms.json'



export default function Psalm({ route, navigation }) {
  const { psalmNum } = route.params;

  return (
    <View>
      <ScrollView>
        <Text style={{ fontSize: 25, margin: 20 }}>
          {text.text[psalmNum - 1].join(' ')}
        </Text>
      </ScrollView>
    </View>
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

// Psalm.propTypes = {
//     psalmNum: PropTypes.number
//   }