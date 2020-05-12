import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, ListItem, ScrollView, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { SearchBar } from 'react-native-elements';
import SettingsList from 'react-native-settings-list';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AtoZList from 'react-native-atoz-list';
import AlphabetListView from 'react-native-alphabetlistview'

import text from './psalms.json'

let yourData = {
  '1': [],
  '2': [],
  '3': [],
}


export default class Home extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    return (
      <View style={{ flex: 1, marginTop: 0 }}>
        <SearchBar
          placeholder="Search..."
          onChangeText={this.updateSearch}
          value={this.state.search}
        />
        <AlphabetListView
          data={yourData}
          cell={text.text.index}
          cellHeight={100}
          sectionHeaderHeight={22.5}
        />
        <SettingsList>
          {text.text.map((psalm, i) => ('psalm ' + i + 1).indexOf(this.state.search.toLowerCase()) > -1 ? (
            <SettingsList.Item
              title={`Psalm ${i + 1}`}
              onPress={() =>
                this.props.navigation.navigate('Psalm', { 'psalmNum': i + 1 })
              }
              key={`Psalm ${i + 1}`}
            />
          ) : '')}
        </SettingsList>
      </View>
    );
  }
};

