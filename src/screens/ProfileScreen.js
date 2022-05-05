import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity,SafeAreaView,ScrollView ,Image,Animated, Modal,} from 'react-native'
import { Icon } from 'react-native-elements';

import {  Avatar,Title,Caption,TouchableRipple,Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import CustumInput from '../components/CustumInput';
import { color } from 'react-native-reanimated';

const ModalPoup = ({visible, children}) => {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};


const ProfileScreen =(({ navigation }) =>{
  const [visible, setVisible] = React.useState(false);

 
  
  return (

    <SafeAreaView style={{
      paddingTop:40,
  }}>
        <ScrollView>

    <View style={{
      backgroundColor:'blue',
      height:170,
    }}>
       <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
          }}
          //borderRadius style will help us make the Round Shape Image
          style={{ width: 50, height: 50, borderRadius: 50 / 2,alignSelf:'center',
        marginTop:40, }}
        />
      <TouchableOpacity
                style={{position:'absolute',top:20,right:20}}

      >
  <Icon 
          name={'logout'} 
          type={'ant-design'}
          color={'#FFFFFF'}
          size={25}
          
          />
      </TouchableOpacity>
      <Text style={{
        textAlign:'center',
        marginTop:20,
        color:'white',
        fontSize:20,
      }}>Islem Test</Text>
           <Text style={{
        textAlign:'center',
       
        color:'white',
        fontSize:16,
        fontWeight:'bold'
      }}>Islem@test.com</Text>
    </View>
    <CustumInput editable={true} placeholder={"Prénom"} title={'Prénom'}/>
    <CustumInput editable={true} placeholder={"Nom"} title={'Nom'}/>
    <CustumInput inputType={'numeric'} editable={true} placeholder={"Téléphone"} title={'Téléphone'}/>

    <CustumInput inputType={'email-address'} editable={true} placeholder={"Email"} title={'Email'}/>
    <CustumInput onPress={()=>{
setVisible(true)
    }}  editable={false} placeholder={"Homme"} title={'Sexe'}/>
      <TouchableOpacity onPress={() => {}} style={{
            backgroundColor:'black',
            padding:10,
            borderRadius:10,
            width:'90%',
            marginBottom:50,
            alignSelf:'center',

          }}>
            <Text style={{
              color:'white',
              fontWeight:'bold',
              textAlign:'center',
            }}>Sauvegarder</Text>
          </TouchableOpacity>
  
  <ModalPoup visible={visible}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Image
                source={require('../assets/X.png')}
                style={{height: 30, width: 30}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
        
        </View>
        <TouchableOpacity onPress={()=>{
          setVisible(false)
        }} style={styles.btnSexe}>
        <Text style={{
          textAlign:'center',
          fontWeight:'bold',
          fontSize:16,
          color:'white',
        }}>Homme</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
          setVisible(false)
        }} style={styles.btnSexe}>
          <Text style={{
          textAlign:'center',
          fontWeight:'bold',
          fontSize:16,
          color:'white',
        }}>Femme</Text>
               </TouchableOpacity>

      
      </ModalPoup>
      </ScrollView>

    </SafeAreaView>
  );
          });

export default  ProfileScreen;
const styles = StyleSheet.create({
  btnSexe:{
      backgroundColor:'black',
      padding:10,
      marginVertical:5,
  },
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
  header: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
   
  },
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
})
