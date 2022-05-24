import React, { useState } from 'react'
import {Text ,View, StyleSheet, TouchableOpacity,SafeAreaView,ScrollView ,ImageBackground,Image, Modal,} from 'react-native'
import { Icon } from 'react-native-elements';
import Animated from 'react-native-reanimated';
import * as ImagePicker from 'expo-image-picker';

import {  Avatar,Title,Caption,TouchableRipple } from 'react-native-paper'
import CustumInput from '../components/CustumInput';
import { color } from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import { CheckBox } from 'react-native-elements'

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
  const [visibleSexe, setVisibleSexe] = React.useState(false);
  const [image, setImage] = useState(null);

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [homme,setHomme]=useState(false);
  const [femme,setFemme]=useState(false);
  const [email, setEmail] = React.useState("");
  const [sexe, setSexe] = React.useState("Homme");
  const genderHomme = () =>{

    setHomme(true);
    setFemme(false);
  }
  const genderFemme = () =>{

    setHomme(false);
    setFemme(true);
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  renderInner = () => (

    <View style={styles.panel}>
         <View style={{alignItems:'center'}}>
       
             <Text style={styles.panelTitle}>Télécharger photo</Text>
             <Text style={styles.panelSubtitle}>choisir votre photo      </Text>
        
         </View>


        
         <TouchableOpacity onPress={pickImage} style={styles.panelButton}>
             <Text style={styles.panelButtonTitle}>Télécharger photo</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.panelButton} onPress={()=>bs.current.snapTo(1)}>
             <Text style={styles.panelButtonTitle}>Annuler</Text>
         </TouchableOpacity>


</View>
  );

  renderHeader = () => (
    <View style={styles.header}>
           
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );
  bs = React.createRef();
  fall = new Animated.Value(1);

  
  return (

    <SafeAreaView style={{
      paddingTop:40,
  }}>
    <BottomSheet
        ref={bs}
        snapPoints={[330, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
       <ModalPoup visible={visibleSexe}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setVisibleSexe(false)}>
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
          setSexe("Homme")
          setVisibleSexe(false)
        }} style={styles.btnSexe}>
        <Text style={{
          textAlign:'center',
          fontWeight:'bold',
          fontSize:16,
          color:'white',
        }}>Homme</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
           setSexe("Femme")
           setVisibleSexe(false)
        }} style={styles.btnSexe}>
          <Text style={{
          textAlign:'center',
          fontWeight:'bold',
          fontSize:16,
          color:'white',
        }}>Femme</Text>
               </TouchableOpacity>

      
      </ModalPoup>
        <ScrollView>

    <View style={{
      backgroundColor:'#D9D9D9',
      height:200,
    }}>
      <TouchableOpacity onPress={() => bs.current.snapTo(0)}>

       <ImageBackground
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLvdLq5DN6TMnCLHtc9E9DyJQyaRJpPfFFdJ75JF0eOcL9iQzX2ErYeqz1cdV8ABkUtXY&usqp=CAU',
          }}
          //borderRadius style will help us make the Round Shape Image
          style={{ width: 100, height: 100, borderRadius: 45 / 2,alignSelf:'center',
        marginTop:40, }}
        ><View style ={{
          flex:1,
          justifyContent:'center',
          alignItems:'center',
        }}>
          <Icon name="camera"    type={'feather'} size={35} color="#fff" style={{

            opacity:0.66,
            alignItems:'center',
            justifyContent:'center',
            borderWidth:0.5,
            borderColor:'#fff',
            borderRadius:9,

            
          }}/>
      
        </View>
       </ImageBackground> 
              </TouchableOpacity>

      <TouchableOpacity
      onPress={()=>{
        navigation.reset({
          index: 0,
          routes: [{ name: 'StartScreen' }],
        })
      }}
                style={{position:'absolute',top:20,right:20}}

      >
  <Icon 
          name={'power'} 
          type={'feather'}
          color={'#623262'}
          size={30}
          
          />
      </TouchableOpacity>
      <Text style={{
        textAlign:'center',
        marginTop:20,
        color:'#623262',
        fontSize:20,
      }}>Islem Test</Text>
           <Text style={{
        textAlign:'center',
       
        color:'#623262',
        fontSize:16,
        fontWeight:'bold'
      }}>Islem@test.com</Text>
    </View>
    <CustumInput onChangeText={(value)=>{
      setFirstName(value)
    }} onCancel={()=>{
      setFirstName("")
    }} from={"Profile"} value={firstName} editable={true} placeholder={"Prénom"} title={'Prénom'}/>
    <CustumInput onChangeText={(value)=>{
      setLastName(value)
    }} onCancel={()=>{
      setLastName("")
    }} from={"Profile"} value={lastName} editable={true} placeholder={"Nom"} title={'Nom'}/>
    <CustumInput onChangeText={(value)=>{
      setPhoneNumber(value)
    }} onCancel={()=>{
      setPhoneNumber("")
    }} from={"Profile"} value={phoneNumber} inputType={'numeric'} editable={true} placeholder={"Téléphone"} title={'Téléphone'}/>

    <CustumInput onChangeText={(value)=>{
      setEmail(value)
    }} onCancel={()=>{
      setEmail("")
    }} from={"Profile"} value={email} inputType={'email-address'} editable={true} placeholder={"Email"} title={'Email'}/>
    <View style={{
        paddingHorizontal:10,
        marginBottom:5
      }}>
          <Text style={{
            color:'#1935F1',
            fontWeight:'bold',
            paddingHorizontal:10,
            marginBottom:5
        }}>Sexe</Text>
      
        <CheckBox 
        title="Homme"
        checked={homme}
        containerStyle ={{   width: '100%',
        marginTop: 10,
      
        backgroundColor: '#e8e8e8'}}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        onPress={genderHomme}
      
      />
       
   
     

     <CheckBox 
        title="Femme"
        checked={femme}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        containerStyle ={{   width: '100%',
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#e8e8e8'}}
        onPress={genderFemme}
      />
      </View>
      <TouchableOpacity onPress={() => {}} style={{
            backgroundColor:'#623262',
            padding:10,
            borderRadius:10,
            width:'90%',
            marginBottom:10,
            alignSelf:'center',

          }}>
            <Text style={{
              color:'white',
              fontWeight:'bold',
              textAlign:'center',
            }}>Sauvegarder</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ChangermotpasseScreen')} style={{
            backgroundColor:'#623262',
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
            }}>Changer Mot de passe</Text>
          </TouchableOpacity>
  
  
      
      </ScrollView>
      <TouchableOpacity onPress={()=>{
       navigation.navigate("NotificationScreen")
     }}  style={{
              width:40,
              height:40,
              borderRadius:40/2,
              backgroundColor:'green',
              position:'absolute',
              bottom:60,
              right:40
            }}><Icon 
          name={'notifications-none'} 
          type={'material-icons'}
          color={'#FFFFFF'}
          size={35}
          
          /></TouchableOpacity>
         
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
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#623262',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
})
