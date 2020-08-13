import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import {createBottomTabNavigator} from 'react-navigation';

export function WodA({children, style, ...props}){
  console.log(children[3]);
    return(
        <View >
        <Text {...props} style={[style, styles.title]}>{children[0]}</Text>
        <Text {...props} style={[style, styles.text]}>{children[3]}</Text>
        </View>
      )

}

const styles = StyleSheet.create({
  title:{
    textAlignVertical: 'top',
    textAlign: 'center',
    marginTop: 0,
    fontSize: 20,
    fontWeight: '300',

  },
  text:{
    marginTop:0,
    fontSize: 14,
    marginLeft: 4,
    marginRight: 4,
    color: 'black',
    fontWeight: '300',
    textAlign: 'justify',
  },
  container: {
    // flex: 1,

    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
