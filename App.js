/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';
import Profile from './Mainfolder/Profile';
import { AppNav } from './Mainfolder/Navigation';

export default class App extends Component {
  render() {
    return (
      <View style={{backgroundColor:"purple", flex:1}}>
      <StatusBar backgroundColor="purple"/>
      <AppNav/>
      </View>
    );
  }
}

