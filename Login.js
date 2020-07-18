import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { Alert,Keyboard, TouchableWithoutFeedback, KeyboardTouchableWithoutFeedback, TextInput,TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { Input } from './components/Input';
import { Heading } from './components/Heading';
import {AuthContainer} from './components/AuthContainer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FilledButton } from './components/FilledButton';
import { AuthContext } from './components/context';
import * as Animatable from 'react-native-animatable';
import Users from './users';



const SignInScreen = ({navigation}) => {
    const DismissKeyboard = ({ children }) => (
        <TouchableWithoutFeedback
            onPress={() => Keyboard.dismiss()}> {children}
        </TouchableWithoutFeedback>
    );
    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });


    const { signIn } = React.useContext(AuthContext);

    const textInputChange = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleValidUser = (val) => {
        if( val.trim().length >= 4 ) {
            setData({
                ...data,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                isValidUser: false
            });
        }
    }

    const loginHandle = (userName, password) => {

        const foundUser = Users.filter( item => {
            return userName == item.username && password == item.password;
        } );

        if ( data.username.length == 0 || data.password.length == 0 ) {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                {text: 'Okay'}
            ]);
            return;
        }

        if ( foundUser.length == 0 ) {
            Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                {text: 'Okay'}
            ]);
            return;
        }
        signIn(foundUser);
    }

    return (

        <Animatable.View
            animation="fadeInUpBig"
            style={styles.container}
        >
        <View style={styles.innerContainer}>
        <View style={styles.header}>
            <Text style={styles.text_header}>Rig Training</Text>
        </View>
            <Text style={styles.text}>Username</Text>
            <View style={styles.action}>
            <TouchableOpacity>
                <TextInput
                    placeholder="Username"
                    placeholderTextColor="grey"
                    style={styles.text}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                    onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                />
                </TouchableOpacity>
                {data.check_textInputChange ?
                <Animatable.View
                    animation="bounceIn"
                >

                </Animatable.View>
                : null}

            </View>
            { data.isValidUser ? null :
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
            </Animatable.View>
            }


            <Text style={styles.text}>Password</Text>
            <View style={styles.action}>

                <TextInput
                    placeholder="Password"
                    placeholderTextColor="grey"
                    secureTextEntry={data.secureTextEntry ? true : false}

                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}>
                </TouchableOpacity>
            </View>
            { data.isValidPassword ? null :
            <Animatable.View animation="fadeInLeft" duration={500}>
                <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
            </Animatable.View>
            }


            <TouchableOpacity>
                <Text style={{color: '#009387', marginTop:15}}>Forgot password?</Text>
            </TouchableOpacity>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {loginHandle( data.username, data.password )}}
                >

                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUpScreen')}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            </View>
        </Animatable.View>

    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    innerContainer:{
        backgroundColor: '#004893',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 55,
        borderRadius: 40,
        paddingLeft: 30,
        paddingRight: 30,
        height: '90%',
    },
    text:{
        color:'white'
    },
    header: {
        marginTop: 40,
        marginBottom: '100%',
        justifyContent: 'flex-end',
        textAlign: 'center'   ,
    },
    footer: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 40,
        paddingVertical: 60
    },
    text_header: {
        textAlign: 'center'   ,
        color:'white',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        bottom:0,
        position: 'absolute',
        color:'white',
        fontSize: 18
    },
    textInput: {
        flex: 1,
        textAlign: 'center'   ,

        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color:'white',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',

    },
    signIn: {

        textAlign: 'center'   ,
        marginTop: 100,
        width: '100%',

        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        textAlign: 'center'   ,
        fontSize: 18,
        fontWeight: 'bold'
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        textAlign: 'center'   ,

    }
  });
  {/*
export function Login( {navigation} ){
  {/*const {login} = React.useContext(AuthContext);
  const [email, setEmail] = React.useState('bithovendev@gmail.com');
  const [password, setPassword] = React.useState('abc');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

    return (
      <AuthContainer>

        <Heading>Rig Training</Heading>
        <Input style={styles.input} placeholder={"Email"} keyboardType={"email-address"}/>
        <Input style={styles.input} placeholder={"Password"} secrueTextEntry/>
        <FilledButton
        title={'Login'}
        style={styles.loginButton}
        onPress={() => navigation.navigate('Home')}
      />
      </AuthContainer>

    );

}

const styles = StyleSheet.create({
  input:{
    marginVertical: 20,
    borderRadius:8,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/}
