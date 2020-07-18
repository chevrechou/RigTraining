import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import {createBottomTabNavigator} from 'react-navigation';

export function Heading({children, style, ...props}){
    return(
        <Text {...props} style={[style, styles.text]}>{children}</Text>
      )

}

const styles = StyleSheet.create({
  text:{
    marginTop: 5,
    color:'white',
    fontSize: 32,
    fontWeight: '400',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
