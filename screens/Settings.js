import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { FilledButton } from '../components/FilledButton';
import{ AuthContext } from '../components/context';

function Settings({ navigation,route}) {
    const { signOut, toggleTheme } = React.useContext(AuthContext);

    return (
      <View style={styles.container}>
        <FilledButton
            title={'Log Out'}
            onPress={() => {signOut()}}/>
        <StatusBar style="auto" />
      </View>
    );

}
export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
