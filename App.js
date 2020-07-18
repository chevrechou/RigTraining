import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { useEffect } from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { isSignedIn } from "./auth";import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './screens/Home';
import Workout from './screens/Workout';
import Settings from './screens/Settings';
import Plans from './screens/Plans';
import {Login} from './Login';
import { AsyncStorage } from 'AsyncStorage';
import RootStackScreen from './navigators/RootStackScreen';

import {AuthStackNavigator} from './navigators/AuthStackNavigator';
import { AuthContext } from './components/context';

const RootStack = createStackNavigator();

const Tab = createBottomTabNavigator();
const TopTab=createMaterialTopTabNavigator();

const App = () => {

    const initialLoginState = {
      isLoading: true,
      userName: null,
      userToken: null,
    };
    const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async(foundUser) => {
      // setUserToken('fgkj');
      // setIsLoading(false);
      const userToken = String(foundUser[0].userToken);
      const userName = foundUser[0].username;

      try {
        await AsyncStorage.setItem('userToken', userToken);
      } catch(e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },
    signOut: async() => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
      // setUserToken('fgkj');
      // setIsLoading(false);
    },
    toggleTheme: () => {
      setIsDarkTheme( isDarkTheme => !isDarkTheme );
    }
  }), []);

  useEffect(() => {
    setTimeout(async() => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);

  if( loginState.isLoading ) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>Loading</Text>
      </View>
    );
  }
    return (
      <AuthContext.Provider value={authContext}>

      <NavigationContainer styles={styles.container}>

        {/*
          <RootStack.Navigator
            screenOptions={{
              headerShown: false,
              animationEnabled: false,
            }}>
             <RootStack.Screen name={'AuthStack'} component={AuthStackNavigator} />
          </RootStack.Navigator>
          </NavigationContainer >
);


      <NavigationContainer styles={styles.container}>
        */}
        { loginState.userToken !== null ? (
        <Tab.Navigator
          initialRouteName="Home"
          style={{backgroundColor: "red"}}
          backBehavior="history"
          tabBarOptions={{
           activeTintColor: 'rgba(0, 59, 255, 0.82)',
         }}>
          <Tab.Screen
          options={{

          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
        name="Home" component={Home} />




          <Tab.Screen
            options={{
            tabBarLabel: 'Workouts',
            tabBarIcon: ({ color, size }) => (
              <Icon name="dumbbell" color={color} size={size} />
            ),
          }}
          name="Workouts" component={Workout} />






          <Tab.Screen
          options={{
          tabBarLabel: 'Plans',
          tabBarIcon: ({ color, size }) => (
            <Icon name="clipboard-list" color={color} size={size} />
          ),
        }}
          name="Plans" component={Plans} />

          <Tab.Screen
          options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Icon name="cog" color={color} size={size} />
          ),
        }}
        name="Settings" component={Settings} />
        </Tab.Navigator>
      )
      :
        <RootStackScreen/>
      }


      </NavigationContainer>
      </AuthContext.Provider >
);


}
export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
