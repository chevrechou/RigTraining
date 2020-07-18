import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CrossFit from '../plans/DetailedPlan';
import { Image, ScrollView, FlatList, StyleSheet, Dimensions, Text, View } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Heading } from '../components/Heading';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailedPlan from '../plans/DetailedPlan';



const {width, height} = Dimensions.get('window');

const TopTab=createMaterialTopTabNavigator();

function PlansScreen({ navigation,route}) {
  const {data}=route.params;
  return (
    <NavigationContainer style={styles.container} independent={true}>
      <View style={styles.plansView}>
      <Heading>Plans</Heading>

      <FlatList
        data={data}
        renderItem={({item})=>
          <Card >
            <View>
              <Text style={{textAlign: 'center', fontSize: 20}}>{item.Name} </Text>
              <Image source={item.url}   style={{width: 'auto', height: 600, marginBottom: 10 , borderRadius: 40}}/>
              <Button
                onPress={() => navigation.navigate('DetailedPlan')}
                icon={<Icon name='eye' color='#ffffff' />}
                buttonStyle={{borderRadius: 0, marginLeft: '20%', marginRight: '20%', marginBottom: 0}}
                title='View Plan' />
            </View>
          </Card>
        }
        keyExtractor={item=>item.ID}
      >
        <Text>Hello</Text>
        <StatusBar style="auto" />
      </FlatList>
      </View>
    </NavigationContainer >

  );
}
const PlanStack = createStackNavigator();

class Plans extends Component {
  constructor(props){
    super(props);
    this.state={
      plans:[
        {ID:1, Name:"Dumbbell Program - 4 Week Plan", url:require('../img/Dumbbellprogram.png')},
        {ID:2, Name:"Limited Kit No Porblem", url:require('../img/LimitedKit.png')},

        {ID:3, Name:"12 Week 121 Coaching", url:require("../img/12Week121.png")},
        {ID:4, Name:"Total Coniditioning: 4 Weeks of Conditions Workouts", url:require("../img/TotalConditioning.png")},
        {ID:5, Name:"121 Monthly Coaching",  url:require('../img/121Monthly.png')},

        {ID:6, Name:"12 Week Compund Strenght Cycle", url:require('../img/12WeekCompound.png')},

      ]
    };
  }
  render(){
    const { navigation } = this.props;
      return (
      <PlanStack.Navigator>
        <PlanStack.Screen name="Plans" component={PlansScreen}   initialParams={{ data: this.state.plans }}/>
        <PlanStack.Screen name="DetailedPlan" component={DetailedPlan} />

      </PlanStack.Navigator>
    );

  }
}
export default Plans;

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,

    flex: 1,
    backgroundColor: '#004893',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plansView:{
    textAlign: 'center',
    height: height,
    // display: 'grid',
    backgroundColor: '#004893',

  }
});
