import React from 'react';
import { Platform, View,Text,StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import Icons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
 
const config = Platform.select({

  default: {},
});


const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Список врачей',
  
};

HomeStack.path = '';

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Архив врачей',
  
};

LinksStack.path = '';

const tabOptions = {    
  tabBarOptions: {
      activeTintColor:'#588bc4',
      inactiveTintColor:'#ccc',
      style:{
          backgroundColor:'#f1f6fc',
       
          paddingTop: 20,
          paddingBottom: 20,
          marginTop: 10
      },
      indicatorStyle: {
          backgroundColor: '#588bc4',
      },
      labelStyle: {
        fontSize: 15
      }
  },
}


const tabNavigator =  createMaterialTopTabNavigator({
  HomeStack,
  LinksStack,
},tabOptions);

tabNavigator.path = '';


const YNavigator = createStackNavigator ({
  Y:{ screen: tabNavigator,
    navigationOptions: ({navigation}) => ({
     style: { justifyContent: 'center' },
     header:  
     <View style={styles.top__header}>
        <View style={{width: 220}} >
          <Text style={styles.top__header_text}>Мои врачи </Text>
        </View>
        <TouchableOpacity   hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}  style={{width: 100}} onPress={() =>   navigation.navigate('Add')} >
          <Icons   style={styles.top__header_icon}  name="ios-add" size={30} color="#588bc4" />
        </TouchableOpacity>
     </View>,
  
    })
  },
})
export default YNavigator;


const styles = StyleSheet.create({
  top__header: 
  { 
    width: 320,
    backgroundColor: 'white', 
    display: 'flex',
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingTop:50,
    paddingBottom: 20
  },
  top__header_text: 
  {
    color:'black',
    fontSize: 24, 
    alignSelf:'flex-end'
  },
  top__header_icon : 
  {
    alignSelf:"flex-end", 
    paddingRight: 40
  }
})

