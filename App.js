import React from 'react';
import Login from './Login'
import Register from './Register'
import Meal from './Meal'
import {StackNavigator} from 'react-navigation'
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}


const RootStack = StackNavigator(
  {
    Login: { screen: Login, },
    Register: { screen: Register, },
    Meal: { screen: Meal, }
  },
  {
    initialRouteName: 'Login',
    // navigationOptions: {
    //   headerStyle: { backgroundColor: '#FFC100' },
    //   headerTintColor: 'blue',
    //   headerTitleStyle: {
    //     fontWeight: 'bold',
    //     fontSize: 30
    //   }
    // }
  }
);