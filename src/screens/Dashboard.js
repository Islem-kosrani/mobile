import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  Image,
  Platform,
  Text,
  TouchableWithoutFeedback,
  View,
  StyleSheet
} from 'react-native';
import { Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import AccueilScreen from './AccueilScreen';
import AnnonceScreen from './AnnonceScreen';
import ReservationScreen from './ReservationScreen';
import ProfileScreen from './ProfileScreen';
import PublierScreen from './PublierScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = (props) => {
  const Tab = createBottomTabNavigator();
  const ios = Platform.OS === 'ios';
    const width = Dimensions.get('window').width;
    const tabBarWidth = width - 30;
    return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
          tabBarShowLabel:true,
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarStyle: {
          height: 75,
          backgroundColor: "#FFF",
          elevation: 5,

        },

          tabBarItemStyle: {
             // borderTopWidth:3,
              borderColor:"#000",
              width: (tabBarWidth/5)-20, // divided by amount of screens you have
          },
      }}
      initialRouteName={'FeedScreen'}>
      <Tab.Screen
        name="FeedScreen"
        component={AccueilScreen}
        options={{
          tabBarLabel: 'Accueil',
          tabBarColor: "red",
          tabBarIcon: ({focused}) =>
          <Icon 
          name={'home'} 
          type={'material-community'}
          color={'#800080'}
          size={30}
          
          />,
        }}
      />
      <Tab.Screen
        name="ChatScreen"
        component={AnnonceScreen}
        options={{
          tabBarLabel: 'Annonces',
            tabBarColor: "red",
          tabBarIcon: ({focused}) =>
          <Icon 
          name={'list'} 
          type={'material'}
          color={'#800080'}
          size={30}
          
          />,
        }}
      />
      <Tab.Screen
        name="AddAvisScreen"
        component={PublierScreen}
        options={({navigation}) => ({
          tabBarLabel: 'Publier',

          tabBarButton: props => (
            <TouchableWithoutFeedback
              {...props}
              onPress={() => {
                navigation.navigate('PublierScreen');
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 50,
                   
                }}>
                 <Icon 
      name={'plus'} 
      type={'font-awesome-5'}
      color={'#800080'}
      containerStyle={{alignSelf:'center'}}
      reverse
      size={25}
      
      />
 <Text style={styles.PostButton}>Publier</Text>
              </View>
            </TouchableWithoutFeedback>
          ),
        })}
      />
     
      <Tab.Screen
        name="ActivityScreen"
        component={ReservationScreen}
        options={{
          tabBarLabel: 'Réservations',
            tabBarColor: "red",

          tabBarIcon: ({focused}) =>
          <Icon 
          name={'shopping-cart'} 
          type={'feather'}
          color={'#800080'}
          size={30}
          
          />,
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profil',
            tabBarColor: "red",

          tabBarIcon: ({focused}) =>
          <Icon 
          name={'person'} 
          type={'material'}
          color={'#800080'}
          size={30}
          
          />,
        }}
      />
    </Tab.Navigator>
  );
};
const styles=StyleSheet.create({
  container:{
  height:60,
  justifyContent:'flex-end',
  backgroundColor:'yellow',
  },
      bottomBar:{
          backgroundColor:'#f2f7fcff',
          width:'115%',
          height:65,
          flexDirection:'row',
          justifyContent:'space-between',
          paddingHorizontal:20,
          paddingVertical:16,
  
      },
  
  
      barItemView:{
        
          alignItems:'center',
          justifyContent:'flex-end',
      },
      floatingButton:{
          position:'absolute',
          alignSelf:'center',
          backgroundColor:'#f8f4f4',
          width:70,
          height:70,
          borderRadius:25,
          zIndex:10,
          bottom:30,
      },
      PostButton:{
  color:'#186ADF',
  marginTop:3,
  fontWeight:'bold',
      },
      Text:{
      color:'#696969',
      marginTop:3,
      },
  });
export default TabNavigation;