import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, ListItem, ScrollView, FlatList } from 'react-native';
import Constants from 'expo-constants';
import text from './psalms.json'


function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}



export default function Psalm(props) {
  return (
    <View>
        <Text>
            {text.text[props.psalmNum-1].join(' ')}
        </Text>
              {/* {text.text.map((psalm,i)=>(
          <ScrollView>

            <Text key={`psalm-${i+1}`}>
              {psalm}
            </Text>
            </ScrollView>
        ))} */}
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