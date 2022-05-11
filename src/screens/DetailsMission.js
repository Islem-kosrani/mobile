import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity,SafeAreaView,ScrollView ,ImageBackground,Image, Modal,} from 'react-native'
import { Icon } from 'react-native-elements';
import { theme } from '../core/theme';


export default function DetailsMission({ navigation }) {
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
              }}>Détails de la mission</Text>
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
          <View style={{
            marginHorizontal:10
          }}>
            
         
          <Text style={{
                 fontWeight:'bold',
                 fontSize:16,
                 color:'black',
                 marginVertical:5,
                 
               }}>Détail expéditeur</Text>
          <View style={styles.container}>
          <Text style={styles.title}>Nom & Prénom</Text><Text>Test Test</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Email</Text><Text>test@gmail.com</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Numéro de téléphone :</Text><Text>56565656</Text>
        </View>
        <View style={{
          borderWidth:1,
          borderColor:'black',
          marginVertical:10,

        }}/>
           <Text style={{
                 fontWeight:'bold',
                 fontSize:16,
                 color:'black',
                 marginVertical:5,
                 
               }}>Détail voyageur</Text>
          <View style={styles.container}>
          <Text style={styles.title}>Nom & Prénom</Text><Text>Test Test</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Email</Text><Text>test@gmail.com</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Numéro de téléphone :</Text><Text>56565656</Text>
        </View>
        <View style={{
          borderWidth:1,
          borderColor:'black',
          marginVertical:10,

        }}/>
           <Text style={{
                 fontWeight:'bold',
                 fontSize:16,
                 color:'black',
                 marginVertical:5,
                 
               }}>Détail recevieur</Text>
          <View style={styles.container}>
          <Text style={styles.title}>Nom & Prénom</Text><Text>Test Test</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Email</Text><Text>test@gmail.com</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Numéro de téléphone :</Text><Text>56565656</Text>
        </View>
        <View style={{
          borderWidth:1,
          borderColor:'black',
          marginVertical:10,

        }}/>
           <Text style={{
                 fontWeight:'bold',
                 fontSize:16,
                 color:'black',
                 marginVertical:5,
                 
               }}>Date</Text>
          <View style={styles.container}>
          <Text style={styles.title}>Date de départ</Text><Text>31/12/9999</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Heure de départ</Text><Text>08:00</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Date d'arrivée</Text><Text>31/12/9999</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Heure de d'arrivée</Text><Text>08:00</Text>
        </View>
        </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 13,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginHorizontal:25,
    paddingVertical: 25,
    paddingHorizontal: 20,
   
    marginVertical: 10,
    flexDirection:'column'
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50/2
  },
  txt1:{
    fontSize:15,
    fontWeight:'bold',
    color:"#800080"
  },
  txt2:{
    fontSize:17,
    fontWeight:'normal',
    color:"gray"
  },
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
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:2
  },
  title:{
    fontWeight:'bold',
    fontSize:16,
    color:'blue',
  }

});