import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  Home from '../screen/Home';
import  Plans from '../screen/Plans';
import DetailedPlan from '../plans/DetailedPlan';


const AppStack = createStackNavigator();
export default function Navigator(){

    return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: true }} >
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="Plans" component={Plans} />
      </AppStack.Navigator>

    </NavigationContainer>
    );
}
