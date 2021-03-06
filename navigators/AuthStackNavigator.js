import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Login} from '../Login';

const AuthStack = createStackNavigator();
const LoginStack = createStackNavigator();

export function AuthStackNavigator({navigation}) {
  return (
    <AuthStack.Navigator
      mode={'modal'}
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name={'LoginStack'}>
        {() => (
          <LoginStack.Navigator
            mode={'card'}
            screenOptions={{
              headerShown: false,
            }}>
            <LoginStack.Screen name={'Login'} component={Login} />
          </LoginStack.Navigator>
        )}
      </AuthStack.Screen>
    </AuthStack.Navigator>
  );
}
