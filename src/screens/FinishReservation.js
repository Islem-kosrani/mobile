import React, { useState } from 'react'
import {Image,ScrollView, TouchableOpacity, StyleSheet, View , Text,SafeAreaView} from 'react-native'
import { } from 'react-native-paper'
import { Icon } from 'react-native-elements';
import CustumInput from '../components/CustumInput';



export default function FinishReservation({ navigation }) {
  
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
              }}>Confirmation</Text>
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

     
          <TouchableOpacity onPress={()=>{
            
            }}><View style={[styles.card, styles.shadowProp]}>
          
          



            <View>



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
          name={'arrowdown'} 
          type={'ant-design'}
          color={'#800080'}
          size={20}
          
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



          <TouchableOpacity onPress={()=>{
            
        }}><View style={[styles.card, styles.shadowProp]}>
        <View style={{
                backgroundColor:'#800080',
                width:100,
                borderRadius:5,
                marginBottom:10
        }}>

         <Text style={{
             color:'white',
             alignItems:'center',
            alignSelf:'center',
         }}>Destinataire</Text>
        </View>

        <View>



     
         


        </View>

        <View style={{
          flexDirection:'row',
          justifyContent:'space-between'
        }}>


        <View>
      
        </View>
        <View>
        <Text style={[styles.txt2,{textAlign:'center'}]}>Test Test</Text>
        <Text style={[styles.txt2,{textAlign:'center'}]}>Test@gmail.com</Text>
        <View style={{
            flexDirection:'row',
            marginTop:20,
        }}>
         <Icon 
          name={'telephone'} 
          type={'foundation'}
          color={'green'}
          size={25}
          
          /><Text style={{
          color:'green',
          marginStart:10,
      }}>+216555555555</Text>
        </View>
        </View>
        <View>
          <View>
        <Image
style={styles.image}
source={{uri:"https://media.istockphoto.com/photos/closeup-portrait-of-her-she-nice-attractive-puzzled-ignorant-girl-picture-id1132758418?k=20&m=1132758418&s=612x612&w=0&h=ca6WVDDblf3um3mdfCSGVpLGfwuyjj5UTLD9rMMHfH4="}}
resizeMode={"cover"} // <- needs to be "cover" for borderRadius to take effect on Android
/>

</View>
        </View>

        


         </View>
      </View></TouchableOpacity>


      <TouchableOpacity onPress={()=>{
            
        }}><View style={[styles.card, styles.shadowProp]}>
        <View style={{
                backgroundColor:'#800080',
                width:100,
                borderRadius:5,
                marginBottom:10
        }}>

         <Text style={{
             color:'white',
             alignItems:'center',
            alignSelf:'center',
         }}>Expéditeur</Text>
        </View>

        <View>



     
         


        </View>

        <View style={{
          flexDirection:'row',
          justifyContent:'space-between'
        }}>


        <View>
      
        </View>
        <View>
        <Text style={[styles.txt2,{textAlign:'center'}]}>Test Test</Text>
        <Text style={[styles.txt2,{textAlign:'center'}]}>Test@gmail.com</Text>
        <View style={{
            flexDirection:'row',
            marginTop:20,
        }}>
         <Icon 
          name={'telephone'} 
          type={'foundation'}
          color={'green'}
          size={25}
          
          /><Text style={{
          color:'green',
          marginStart:10,
      }}>+216555555555</Text>
        </View>
        </View>
        <View>
          <View>
        <Image
style={styles.image}
source={{uri:"https://media.istockphoto.com/photos/closeup-portrait-of-her-she-nice-attractive-puzzled-ignorant-girl-picture-id1132758418?k=20&m=1132758418&s=612x612&w=0&h=ca6WVDDblf3um3mdfCSGVpLGfwuyjj5UTLD9rMMHfH4="}}
resizeMode={"cover"} // <- needs to be "cover" for borderRadius to take effect on Android
/>

</View>
        </View>

        


         </View>
      </View></TouchableOpacity>


      <TouchableOpacity onPress={()=>{
            
        }}><View style={[styles.card, styles.shadowProp,{paddingBottom:50}]}>
     
        <Text style={{
            fontWeight:'bold',
            fontSize:20,
            marginBottom:10,
            color:'#555557',

        }}>Détails Colis</Text>

        <View>
            <Text style={{fontSize:16}}></Text>
            <View style={{
                flexDirection:'row',
            }}><Text style={{
                fontWeight:'bold',
                fontSize:20,
                color:'#555557'
            }}>Poids(Kg) : </Text>
            <Text style={{
                fontSize:20,
                marginStart:10,
                textAlignVertical:'bottom'
            }}>1</Text>
            </View>
        </View>




     
        
      </View></TouchableOpacity>
      </ScrollView>
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

