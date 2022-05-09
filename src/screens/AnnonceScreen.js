import React from 'react'
import { Text, View,SafeAreaView, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Background from '../components/Background'
import { Icon } from 'react-native-elements';

export default function AnnonceScreen({ navigation }) {
  const [data,setData] = React.useState([{id:1},{id:2},{id:3},{id:4},{id:5}])

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
              }}>Mes Annonces</Text>
              
          </View>
          <FlatList
        data={data}
        renderItem={(item)=>{
            return    <TouchableOpacity onPress={()=>{
              navigation.navigate('DetailsPublicationScreen')
            }}><View style={[styles.card, styles.shadowProp]}>
          
          



            <View style={{
              flexDirection:'row',
              justifyContent:'space-around'
            }}>



              <View style={{
                flexDirection:'row',
                alignItems:'center',
                alignSelf:'center',
              }}>
              <Icon 
          name={'map-marker'} 
          type={'font-awesome'}
          color={'#800080'}
          size={15}
          
          />
          <View style={{
            marginStart:10,
          }}>
            <Text style={styles.txt2}>Tunis</Text>
            <Text style={styles.txt2}>31/12/9999</Text>
          </View>
          <View>

          </View>


              </View>
             


<Icon 
          name={'arrowright'} 
          type={'ant-design'}
          color={'#800080'}
          size={20}
            style={{
              marginTop:10
            }}
          />
           


<View style={{
                flexDirection:'row',
                alignItems:'center',
                alignSelf:'center',
              }}>
              <Icon 
          name={'map-marker'} 
          type={'font-awesome'}
          color={'#800080'}
          size={15}
          
          />
          <View style={{
            marginStart:10,
          }}>
            <Text style={styles.txt2}>Sousse</Text>
            <Text style={styles.txt2}>31/12/9999</Text>
          </View>
          <View>

          </View>


              </View>

            </View>
  
          </View></TouchableOpacity>
        }}
        keyExtractor={item => item.id}
      />
        <TouchableOpacity onPress={()=>{
       navigation.navigate("NotificationScreen")
     }}  style={{
              width:40,
              height:40,
              borderRadius:40/2,
              backgroundColor:'green',
              position:'absolute',
              bottom:0,
              right:40
            }}><Icon 
          name={'notifications-none'} 
          type={'material-icons'}
          color={'#FFFFFF'}
          size={35}
          
          /></TouchableOpacity>
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
    fontSize:15,
    fontWeight:'normal',
    color:"gray"
  }
});
