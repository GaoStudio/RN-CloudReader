/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import HomePage from './src/page/HomePage.js'
import DailyPage from './src/page/Tech/DailyPage.js'
AppRegistry.registerComponent('RNCouldReader', () => HomePage);
