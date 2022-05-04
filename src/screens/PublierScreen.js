import React,{useState} from 'react'
import {  Modal,Text, View,SafeAreaView, TouchableOpacity, ScrollView,Image,  Animated,StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements';
import CustumInput from '../components/CustumInput';
import DatePicker from 'react-native-datepicker';
import { theme } from '../core/theme';


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



export default function PublierScreen({ navigation }) {
  const [date, setDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = React.useState(false);

  

  return (
    <SafeAreaView style={{
      paddingTop:40,
  }}>
       <View style={{
            backgroundColor:'#623262',
            paddingVertical:10,
            justifyContent:'center',
            alignItems:'center',
        }}>
            <Text style={{
                color:'white',
                fontSize:15,
               textAlignVertical:'center',
            }}>Ajouter annonce</Text>
             <TouchableOpacity onPress={()=>{
                navigation.goBack()
             }} style={{
                 flexDirection:'row',
                 position:'absolute',
                 left:0,
                 borderRadius:10,
                 justifyContent:'center',
               
             }}>
                 
                 <Icon 
          name={'arrow-left'} 
          type={'Octicons'}
          color={'#FFFFFF'}
          size={50}
          
          />
         
             </TouchableOpacity>
        </View>
        <ScrollView>
          <CustumInput editable={true} placeholder={"Départ"} title={'D\'où partez-vous ?'}/>
          <CustumInput editable={true} placeholder={"Arrivée"} title={'Où partez-vous ?'}/>
 <Text style={{
            color:'#273386',
            fontWeight:'bold',
            marginHorizontal:20,
            paddingTop:10,
        }}>Daté départ</Text>
          <DatePicker
          style={{
            width: '90%',
            marginTop: 20,
            marginHorizontal:20,
          }}
          date={date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="sélectionner une date"
          format="DD-MM-YYYY"
          confirmBtnText="Confirmer"
          cancelBtnText="Annuler"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              width: '100%',
    height: 44,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#e8e8e8'
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
          <Text style={{
            color:'#273386',
            fontWeight:'bold',
            marginHorizontal:20,
            paddingTop:10,
        }}>Daté arrivée</Text>
          <DatePicker
          style={{
            width: '90%',
            marginTop: 20,
            marginHorizontal:20,
          }}
          date={endDate} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="sélectionner une date"
          format="DD-MM-YYYY"
          confirmBtnText="Confirmer"
          cancelBtnText="Annuler"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              width: '100%',
    height: 44,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#e8e8e8'
            },
          }}
          onDateChange={(date) => {
            setEndDate(date);
          }}
        />

          <CustumInput editable={true} placeholder={"Poids(kg)"} title={'Poids(kg)'}/>
          <CustumInput editable={true} placeholder={"Prix/kg"} title={'Prix/kg'}/>
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

        <Text style={{marginVertical: 30, fontSize: 20, textAlign: 'center'}}>
        Félicitations l'ajout a réussi        </Text>
      </ModalPoup>
          <TouchableOpacity onPress={() => setVisible(true)} style={{
            alignItems:'center',
            backgroundColor:'#623262',
            padding:15,
            marginHorizontal:20,
            borderRadius:15,
          }}>
            <Text style={{
              fontWeight:'bold',
              color:'white',
              fontSize:16,
            }}>Publier</Text>
          </TouchableOpacity>
        
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  row: {
    flexDirection: 'row',
    marginTop: 30,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
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
  header: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

});
