import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, ListItem, ScrollView, FlatList } from 'react-native';
import Constants from 'expo-constants';
import text from './psalms.json'
import Psalm from './Psalm.js'


function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}



export default function app() {
  return (
    <View>
      <Psalm psalmNum={1} />
      {/* <SafeAreaView style={styles.container}>
        <FlatList
          data={text.text}
          renderItem={({ item }) => <Item title={item.join(' ')} />}
          keyExtractor={item => item.join(' ')}
        />
      </SafeAreaView> */}
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
