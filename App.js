/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Dimensions} from 'react-native';
import { Context, Pretext } from './src/pretext'
import tests from './src/tests'

const { height, width } = Dimensions.get('window')

const defaultStyle = {
  color: '#000',
  fontSize: 18,
}

Context.give(defaultStyle)

export default class App extends Component {
  renderItem = (item, index) => {
    return (
      <View style={{ marginBottom: 10 }} key={index}>
        <Text>{`${item.case}:`}</Text>
        <Text style={{ marginLeft: 5 }}>{item.text}</Text>
        <Text>Result:</Text>
        <Pretext style={{ marginLeft: 5 }} config={item.config}>{item.text}</Pretext>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{`Welcome to React\nNative Pretext!`}</Text>
        <ScrollView style={styles.testContainer}>
          {tests.map(this.renderItem)}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  testContainer: {
    width: 0.9 * width,
    height: 0.8 * height,
    borderWidth: 1,
    padding: 10,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
