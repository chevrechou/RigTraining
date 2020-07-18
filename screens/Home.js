import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { Dimensions,FlatList, StyleSheet, Text, View, Button } from 'react-native';
import { Header, Card, ListItem } from 'react-native-elements';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Workout from './Workout';
import { Heading } from '../components/Heading';
 import DetailedWorkout from '../plans/DetailedWorkout';



const TopTab=createMaterialTopTabNavigator();
const HomeStack = createStackNavigator();
const {width, height} = Dimensions.get('window');

function HomeScreen({ navigation, route }) {
  const {data}=route.params;

  return (
    <View style={ styles.container}>
      <Heading>Functional Bodybuilding v2</Heading>
      {/*
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Workout')}
      />*/}
      <FlatList
       style={ styles.innerContainer}
      data={data}
      renderItem={({item})=>
        <Card style={styles.card}  >
          <View style={{ flex: 2, flexDirection: 'column', margin: 1 }}>

            <Text style={styles.text}>{item.Name}</Text>

            <Button
              title="Details"
              style={styles.button}
              onPress={() => navigation.navigate("Workout Details", { name: item.Name})}
            />

          </View>

        </Card>
      }
      keyExtractor = { (item) => item.ID.toString() }
    >
      </FlatList>
    </View>
  );
}
class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      wodList:[
        {ID:1, Name:"Monday"},
        {ID:2, Name:"Tuesday"},

        {ID:3, Name:"Wednesday"},
        {ID:4, Name:"Thursday"},
        {ID:5, Name:"Friday"},

        {ID:6, Name:"Sunday"},
        {ID:7, Name:"Saturday"},




      ]
    }
  }
  render(){
    const createTopTabs = () =>{
      return <TopTab.Navigator>
      <TopTab.Screen name="CrossFit"/>
      <TopTab.Screen name="Cardio"/>
      </TopTab.Navigator>
    }
    const { navigation } = this.props;

    return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} initialParams={{ data: this.state.wodList }} />
      <HomeStack.Screen name="Workout Details" component={DetailedWorkout} />

    </HomeStack.Navigator>
  );
  }
}
export default Home;

const styles = StyleSheet.create({
  container: {
    color:'white',
    height: '100%',
    width:width,
    paddingTop: 25,
    backgroundColor: '#004893',
    alignItems: 'center',
  },
  innerContainer:{
    color:'white',
    height: '100%',
    width:width,
    paddingTop: 25,
    backgroundColor: '#004893',
  },
  button:{
    borderRadius: 50,
    backgroundColor: 'rgb(230, 168, 173)',
  },
  text:{
    fontSize: 15,
    fontWeight: 'bold',
  },
  card:{
    borderTopLeftRadius: 8,
     borderTopRightRadius: 8
  }
});
