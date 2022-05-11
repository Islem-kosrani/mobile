import React from 'react'
import {FlatList,Text, View, StyleSheet, TouchableOpacity,SafeAreaView,ScrollView ,ImageBackground,Image, Modal,} from 'react-native'
import { Icon } from 'react-native-elements';
import { theme } from '../core/theme';


export default function TermsAndConditionScreen({ navigation }) {
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
              }}>Termes et conditions</Text>
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
          <FlatList
        data={data}
        style={{
            paddingHorizontal:10,
            marginTop:20,
        }}
        renderItem={(item)=>{
            return    <Text style={{
                    fontSize:16,
                    paddingBottom:5
            }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
        }}
        keyExtractor={item => item.id}
      />
  
    </SafeAreaView>
  )
}

