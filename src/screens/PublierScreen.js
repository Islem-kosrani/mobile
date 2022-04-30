import React,{useState} from 'react'
import { Text, View,SafeAreaView, TouchableOpacity, ScrollView, DatePickerIOS } from 'react-native'
import { Icon } from 'react-native-elements';
import CustumInput from '../components/CustumInput';
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-datepicker';


export default function PublierScreen({ navigation }) {
  const [date, setDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const [open, setOpen] = useState(false)


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
            color:'green',
            fontWeight:'bold',
            marginHorizontal:20,
            paddingTop:10,
        }}>Daté départ</Text>
          <DatePicker
          style={{
            width: '100%',
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
            color:'green',
            fontWeight:'bold',
            marginHorizontal:20,
            paddingTop:10,
        }}>Daté arrivée</Text>
          <DatePicker
          style={{
            width: '100%',
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

          <TouchableOpacity style={{
            alignItems:'center',
            backgroundColor:'blue',
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

