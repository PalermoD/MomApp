/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';

class MomApp extends Component {
  render() {
    return (
      <Image source={require('./images/retrowoman.png')} style={styles.container}>
     
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7A9BD8',
    width: null,
    height: null,
  },
  welcome: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    
  },
  instructions: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
    
  },
});

AppRegistry.registerComponent('MomApp', () => MomApp);
