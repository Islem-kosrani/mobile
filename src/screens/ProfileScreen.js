import React, { useState } from 'react'
import {Text ,View, StyleSheet, TouchableOpacity,SafeAreaView,ScrollView ,ImageBackground,Image, Modal,} from 'react-native'
import { Icon } from 'react-native-elements';
import Animated from 'react-native-reanimated';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';

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

  const [hasCameraPermission, setHasCameraPermission] = useState(null);
const [camera, setCamera] = useState(null);
const [type, setType] = useState(Camera.Constants.Type.back);

useEffect(() => {
  (async () => {
    const cameraStatus = await Camera.requestPermissionsAsync();
    setHasCameraPermission(cameraStatus.status === 'granted');
})();
}, []);

const takePicture = async () => {
  if(camera){
      const data = await camera.takePictureAsync(null)
      setImage(data.uri);
  }
}
if (hasCameraPermission === false) {
  return <Text>No access to camera</Text>;
}
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
       
             <Text style={styles.panelTitle}>telecharger photo</Text>
             <Text style={styles.panelSubtitle}>choisir votre photo      </Text>
        
         </View>


         <TouchableOpacity style={styles.panelButton}>
             <Text style={styles.panelButtonTitle}>Prendre une photo</Text>
         </TouchableOpacity>
         <TouchableOpacity onPress={pickImage} style={styles.panelButton}>
             <Text style={styles.panelButtonTitle}>Telecharger photo</Text>
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
<View style={{ flex: 1}}>
   <View style={styles.cameraContainer}>
       <Camera 
            ref={ref => setCamera(ref)}
            style={styles.fixedRatio} 
            type={type}
            ratio={'1:1'} />
    </View>
    <Button
            title="Flip Image"
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
     </Button>
     <Button title="Take Picture" onPress={() => takePicture()} />
     {image && <Image source={{uri: image}} style={{flex:1}}/>}
</View>
    
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
