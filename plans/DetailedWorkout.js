import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import {ScrollView, Dimensions,StyleSheet, Text, View,FlatList} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Header, Card, ListItem, Button } from 'react-native-elements';
import { Heading } from '../components/Heading';
import { WodA } from '../components/WodA';
import { Desc } from '../components/Desc';
import Swiper from 'react-native-deck-swiper';
import ViewOverflow from 'react-native-view-overflow';


const TopTab=createMaterialTopTabNavigator();
const {width, height} = Dimensions.get('window');

export default class DetailedWorkout extends Component  {
  constructor(props){
    super(props);
    console.log(props)
    const route=props.route;
    const name = route.params.name;
    let id=name-1;
    const [index, setIndex]= React.useState(0);
    const dayNumber=route.params.data[0].week[id].day[index].dayID;
    const wodA=(route.params.data[0].week[id].day[index].wodA);
    const roundsA=(route.params.data[0].week[id].day[index].roundsA);
    const desc=(route.params.data[0].week[id].day[index].desc)
    const wodB=(route.params.data[0].week[id].day[index].wodB);
    const roundsB=(route.params.data[0].week[id].day[index].roundsB);


    const  onSwiped= () =>{
      setIndex(index+1);
    }
  }


  render(){
  return (
    <View style={ styles.container}>
    <Swiper
    cards={5}
      cardIndex={index}
      renderCard={(card) => {
        return (
          <View style={styles.card}>

            <Heading style={styles.text}>Day {route.params.data[0].week[id].day[id].dayID}</Heading>
            <Text style={styles.text}>{name}</Text>
            <WodA style={styles.text}> Workout A: {"\n"} {wodA} </WodA>
            <Text style={styles.text}> Rounds: {"\n"} {roundsA} </Text>
            <Desc style={styles.text}> {desc} </Desc>

            <WodA style={styles.text}> Workout B: {"\n"} {wodB} </WodA>
            <Text style={styles.text}> Rounds: {"\n"} {roundsB} </Text> */}
          </View>

        )
      }}
      onSwiped={onSwiped}
      disableTopSwipe
      disableBottomSwipe
       onTapCard={onSwiped}
horizontalThreshold	={width / 6}
       cardVerticalMargin={80}
       stackSize={4}
       stackScale={10}
       stackSeparation={20}
       overlayLabels={{

          left: {
            title: 'Completed!',
            style: {
              label: {
                backgroundColor: 'black',
                borderColor: 'black',
                color: 'white',
                borderWidth: 1
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'flex-start',
                marginTop: 30,
                marginLeft: -30
              }
            }
          },
          right: {
            title: 'DONE',
            style: {
              label: {
                backgroundColor: 'white',
                borderColor: 'black',
                color: 'red',
                borderWidth: 1
              },
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                marginTop: 30,
                marginLeft: 30,
              }
            }
          },
        }}
        >
    </Swiper>

    </View>
  );
}
}
// export default DetailedWorkout;

const styles = StyleSheet.create({
  container: {
    color:'white',
    height: '100%',
    width:width,
    paddingTop: 25,
    backgroundColor: '#004893',
    alignItems: 'center',
  },
  text:{
    color:'white' ,
  },
});
