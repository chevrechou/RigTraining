import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { ScrollView, FlatList, StyleSheet, Text, View, Dimensions } from 'react-native';
import { Header, Card, ListItem, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Video } from 'expo-av';
import { Heading } from '../components/Heading';
import Vid from '../big_buck_bunny.mp4';
import { createStackNavigator } from '@react-navigation/stack';
import DetailedPlan from '../plans/DetailedPlan';



function WorkoutScreen({ navigation,route}) {
  const {data}=route.params;

  return (
    <View style={wodstyles.container}>
      <Heading style={wodstyles.text}>Training Videos</Heading>

    <FlatList
      data={data}
      renderItem={({item})=>
        <Card style={wodstyles.wodcard}>
          <View style={{ flex: 2, flexDirection: 'column', margin: 1 }}>
          <Video
            style={wodstyles.video}
            source={{uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'}}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode=""
            shouldPlay={false}
            isLooping={false}
            useNativeControls
          />
            <Text style={wodstyles.text}>{item.Name}</Text>

            <Button
              title="View Exercise"
              style={wodstyles.button}
              onPress={() => navigation.navigate('DetailedPlan')}
            />

          </View>

        </Card>
      }
      keyExtractor = { (item) => item.ID.toString() }
    >
      <StatusBar hidden={true} />
    </FlatList>

    </View>
  );
}






const {width, height} = Dimensions.get('window');
const WorkoutStack = createStackNavigator();

class Workout extends Component {
  constructor(props){
    super(props);
    this.state={
      wodList:[
        {ID:1, Name:"Squat"},
        {ID:2, Name:"Clean"},

        {ID:3, Name:"Lunges"},
        {ID:4, Name:"Pull Ups"},
        {ID:5, Name:"Push Ups"},

        {ID:6, Name:"Russian Twists"},



      ]
    };
  }
  render(){
    const { navigation } = this.props;

      return (
      <WorkoutStack.Navigator>
        <WorkoutStack.Screen name="Workout" component={WorkoutScreen}   initialParams={{ data: this.state.wodList }}/>
        <WorkoutStack.Screen name="DetailedPlan" component={DetailedPlan} />

      </WorkoutStack.Navigator>
    );

  }
}
export default Workout;



const wodstyles = StyleSheet.create({
  video:{
    width: width*0.8,
    height: height * 0.3,

  },
  button:{
    borderRadius: 50,
  },
  text:{
    marginTop: 10,
    marginBottom: 5,
    color:'black',
    fontSize: 22,
    textAlign: 'center',
  },
  container: {
    color:'white',
    height: '100%',
    paddingTop: 25,
    backgroundColor: '#004893',
    alignItems: 'center',
  },
  wodcard:{
    width:20,
    backgroundColor: 'blue',
    color:'white',
    borderRadius: 40,
  }
});
