import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Header, Card, ListItem, Button } from 'react-native-elements';

const TopTab=createMaterialTopTabNavigator();

function DetailedWorkout({ route }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> {route.params.name}</Text>
      <Card>
        <Header> WOD: </Header>
      </Card>
    </View>
  );
}
export default DetailedWorkout;

const styles = StyleSheet.create({
  container: {
    marginTop:'5%',

    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
