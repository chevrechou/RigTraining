import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Login';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="Login" component={Login}/>
        {/*<RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>*/}
    </RootStack.Navigator>
);

export default RootStackScreen;
