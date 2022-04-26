import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity,SafeAreaView } from 'react-native'

import {  Avatar,Title,Caption,TouchableRipple,Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
const ProfileScreen =(({ navigation }) =>{
 
 
  
  return (

    <Background>
      <BackButton goBack={navigation.goBack} />
      <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection:'row',marginTop:15}}>
          <Avatar.Image
          source={{
          uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpEwvb5jXV6gwNDK3WzlsNqBm8tm8-m50d4gUxDGtvTSZ-S2OZGvPSHAZ-3NRFD43TEes&usqp=CAU',

        }}
        size={80}
        />
        <View style={{marginLeft:20}}>
          <Title style={[styles.title,{
            marginTop:15,
            marginBottom:5,
          }]}>Islem</Title>
          <Caption style={styles.Caption} >@j_doe</Caption>
        </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
<View style={styles.row}>
  <Icon name='map-marker-radius' color='#5E17EB' size={20}/>
  <Text style={{ color :'#777777',marginLeft:20 }}>Sousse,Tunisie</Text>
      </View>
      <View style={styles.row}>
  <Icon name='phone' color='#5E17EB' size={20}/>
  <Text style={{ color :'#777777',marginLeft:20 }}>55121415</Text>
      </View>
      <View style={styles.row}>
  <Icon name='email' color='#5E17EB' size={20}/>
  <Text style={{ color :'#777777',marginLeft:20 }}>islem@gmail.com</Text>
      </View>
    
      </View>
      

      <View style={styles.infoBoxWrapper}>
        <View style={[styles.infoBox,{
          borderRightColor:'#dddddd',
          borderRightWidth:2,
         

        }]}>
        <Title> 4 </Title>
       <Caption>  Nombre des EtoilesEtoies</Caption>
        </View>
        <View style={styles.infoBox}>
        <Title>15</Title>
        <Caption> Nombre de missions realiseés</Caption>
      </View>
      </View>
      <View style={styles.menuWrapper}>
        <TouchableRipple   onPress={() => navigation.navigate('ChangermotpasseScreen')}
        
        
        
        >
          <View style={styles.menuItem}>
            <Icon name="update" color='#5E17EB' size={35}/>
            <Text style ={styles.menuItemText}>Changer Votre Mot passe</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple   onPress={() => navigation.navigate('EditProfileScreen')}>
          <View style={styles.menuItem}>
            <Icon name="account-settings" color='#5E17EB' size={35}/>
            <Text style ={styles.menuItemText}> Modifier Votre Compte</Text>
          </View>
        </TouchableRipple>
      </View>
      </SafeAreaView>
    </Background>
  );
          });

export default  ProfileScreen;
const styles = StyleSheet.create({
  container:{
    flex:1,
  
  },
  userInfoSection:{
    paddingHorizontal:0.5,
    paddingVertical:15,
    marginBottom:7,
  },
  title:{
    fontSize:14,
    lineHeight:14,
    fontWeight:'500'

  },
  row:{
    flexDirection:'row',
    marginBottom:10,
  },
  infoBoxWrapper:{
    borderBottomColor:'#dddddd',
    borderBottomWidth:1,
    borderTopColor:'#dddddd',
    flexDirection:'row',
    height:100,

  },
  infoBox :{
width:'52%',
alignItems:'center',
justifyContent:'center',
  },
  menuWrapper:{
    marginTop:10,

  },
  menuItem:{
    flexDirection:'row',
    paddingVertical:15,
    paddingHorizontal:30,

  },
  menuItemText:{
    color:'#777777',
    marginLeft:20,
    fontWeight:'600',
    fontSize:16,
    lineHeight:26
  },
  text:{
    
  },
})
