import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Animated, Text, View, Image, Dimensions, Button } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import ViewOverflow from 'react-native-view-overflow';
import Woddata from './data.js';
import DetailedWorkout from './plans/DetailedWorkout';
import { Heading } from './components/Heading';
import { WodA } from './components/WodA';
import { Desc } from './components/Desc';



const {width, height} = Dimensions.get('window');

const WodCard = ({card, dayNumber, name, wodA, wodB, roundsA, roundsB, desc}) => (
  <View style={styles.wodcard} >
    <Heading style={styles.text}>Day {dayNumber}</Heading>

    <Text style={styles.text}>{name}</Text>
    <WodA style={styles.wodtext}> Workout A: {"\n"} {wodA} </WodA>
    <Text style={styles.roundtext}> Rounds:  {roundsA} </Text>
    {/* <Desc style={styles.text}> {desc} </Desc>*/}

     <WodA style={styles.wodtext}> Workout B: {"\n"} {wodB} </WodA>
    <Text style={styles.roundtext}> Rounds: {roundsB} </Text>
    </View>
);
const RestDay = ({card, dayNumber, name, wodA, wodB, roundsA, roundsB, desc}) => (
  <View style={styles.wodcard} >
    <Heading style={styles.text}>Day {dayNumber}</Heading>

    <WodA style={styles.wodtext}> Workout A: {"\n"} {wodA} </WodA>
   <Desc style={styles.text}> {desc} </Desc>

    </View>
);


function Swipe({route}) {
  // const route=props.route;
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
    setIndex((index+1)%7);
  }
  console.log(route)

  return (
    <ViewOverflow>
    <View >
      <Swiper
      cards={7}
        cardIndex={index+1}
        renderCard={(card) => <WodCard card={card} dayNumber={index+1} wodA={wodA}
                wodB={wodB}  roundsA={roundsA} roundsB = {roundsB} desc={desc} />}
        onSwiped={onSwiped}
        disableTopSwipe
        disableBottomSwipe
         onTapCard={onSwiped}
horizontalThreshold	={width / 10}
verticalThreshold	={width / 10}
swipeBackCard	={true}
stackAnimationFriction	= {3}
         stackSize={4}
animateCardOpacity	= {true}
         stackScale={10}
         stackSeparation={35}
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
                  // marginTop: 30,
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
                  borderWidth: 1,
                  textAlign:'center',

                },
                wrapper: {
                  flexDirection: 'column',
                  // justifyContent: 'center',
                  alignItems: 'center',
                  marginTop:150,

                }
              }
            },
          }}
          >
      </Swiper>
      <Button
        title="Reset Week"
        style={styles.button}
      />
    </View>
    </ViewOverflow>
  );
}
export default Swipe;


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center', //Centered vertically
     alignItems: 'center', // Centered horizontally
     flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    borderRadius: 50,
    backgroundColor: 'rgb(230, 168, 173)',
  },
  wodcard:{
    borderRadius: 4,
    borderWidth: 2,
    paddingLeft: 10 ,
    paddingRight: 10 ,
    width: width*0.9,
    height: height*0.6,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: '#004893',
    backgroundColor: 'white'
  },
  wodtext:{
    color: '#004893',
  },
  roundtext:{
    marginBottom: 5,
    fontWeight: '400',
    fontSize: 15,
  }
});
