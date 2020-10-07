import * as React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, ListItem, ScrollView, FlatList, TouchableOpacity,CheckBox } from 'react-native';
import Constants from 'expo-constants';
import { SearchBar } from 'react-native-elements';
import SettingsList from 'react-native-settings-list';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Psalm from './Psalm';
import text from './psalms.json';

//NEEDS TO BE DONE
//Add psalm list and make the psalm # lead to is psalm text
//Add text button on top right of psalm text screen
//Add button in text button that changes psalm text
//Add Psalm Cycle list for week, month, and one a day w/ checkboxes

const Stack = createStackNavigator();

export default function HomeScreen({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="PsalmList"
      screenOptions={{
        headerStyle: { height: 66 },
        headerTitleAlign: "center",
        headerTitleStyle: { fontSize: 27 }
      }}
    >
      <Stack.Screen
        name="Psalms"
        component={PsalmList}
        // options={{
        //   headerRight: () => (
        //     <TouchableOpacity style={[{ paddingHorizontal: 15 }]}
        //       onPress={() => navigation.navigate('Date')}>
        //       <MaterialCommunityIcons name="calendar" color={'black'} size={26} />
        //     </TouchableOpacity>
        //   ),
        // }}
      />
      {/* <Stack.Screen
        name="Date"
        component={DateButton}
        options={{
          title: 'Psalm Cycle',
          headerStyle: { height: 65 },
          headerStyle: { height: 66 },
          headerTitleAlign: "center",
          headerTitleStyle: { fontSize: 27 }
        }}
      />
      <Stack.Screen
        name="Aa"
        component={TextButton}
      /> */}
    </Stack.Navigator>
  );
}

function PsalmList({navigation}) {
  return (
    <View style={{ flex: 1, marginTop: 0 }}>
      <SettingsList>
        {text.text.map((psalm, i) =>
          <SettingsList.Item
            title={`Psalm ${i + 1}`}
            onPress={() =>
              navigation.navigate('Psalm', { 'psalmNum': i + 1 })
            }
            key={`Psalm ${i + 1}`}
          />
        )}
      </SettingsList>
    </View>
  );
}


function Psalm({ route, navigation }) {
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

// function DateButton() {
//   return (
//   <View>
//       <CheckBox
//         title='Psalm 1-10'
//         // checked={this.state.checked}
//           // onPress={() => this.setState({ checked: !this.state.checked })}
//       />
//       {/* <CheckBox
//         checkedIcon='dot-circle-o'
//         uncheckedIcon='circle-o'
//         title='checkbox 2'
//         checkedColor='red'
//         checked={this.state.checked2}
//         onPress={() => this.setState({ checked2: !this.state.checked2 })}
//       /> */}
//   </View>
// );
// }

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
  },
  title: {
    fontSize: 32,
  },
});

function TextButton() {
  return (
    <View>
      Text
    </View>
  );
}







//   return (
//     <View style={{ flex: 1, marginTop: 0 }}>
//       <SettingsList>
//         {text.text.map((psalm, i) => ('psalm ' + i + 1).indexOf/*(this.state.search.toLowerCase()*/) > -1 ? (
//           <SettingsList.Item
//             title={`Psalm ${i + 1}`}
//             onPress={() =>
//               this.props.navigation.navigate('Psalm', { 'psalmNum': i + 1 })
//             }
//             key={`Psalm ${i + 1}`}
//           />
//         ) : ''}
//       </SettingsList>
//     </View>
//   );
// }

// function Psalm({ route, navigation }) {
//   const { psalmNum } = route.params;

//   return (
//     <View>
//       <ScrollView>
//         <Text style={{ fontSize: 25, margin: 20 }}>
//           {text.text[psalmNum - 1].join(' ')}
//         </Text>
//       </ScrollView>
//     </View>
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

