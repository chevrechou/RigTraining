import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import {createBottomTabNavigator} from 'react-navigation';

export function Desc({children, style, ...props}){
    return(
        <View style={styles.container}>
        <Text {...props} style={[style, styles.text]}>{children}</Text>
        </View>
      )

}

const styles = StyleSheet.create({
  text:{
    marginTop: 25,
    marginBottom: 25,
    marginLeft: 25,
    marginRight: 25,




    fontSize: 15,
    color:'black',
    fontWeight: '400',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 15,
    marginLeft: 25,
    marginRight: 25,

    backgroundColor: 'rgba(228, 226, 224, 0.86)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
