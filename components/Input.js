import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

// import {createBottomTabNavigator} from 'react-navigation';

export function Input({style,...props}){
    return(
      <TextInput {...props} style={[style,styles.text]}/>

  )
}

const styles = StyleSheet.create({
  text:{
    fontSize:32,
    color:'black'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
