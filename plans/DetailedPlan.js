import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// import {createBottomTabNavigator} from 'react-navigation';

const TopTab=createMaterialTopTabNavigator();

function DetailedPlan({ route }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hello {route.params.name}</Text>
    </View>
  );
}
export default DetailedPlan;

const styles = StyleSheet.create({
  container: {
    marginTop:'5%',

    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
