import React from 'react'
import { Icon } from 'react-native-elements';
import { Text, View,SafeAreaView, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'


export default function DetailsPublicationScreen({ navigation }) {
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
            }}>Détail de l'annonce</Text>
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
    <View style={[styles.card, styles.shadowProp]}>
            <View style={{
              flexDirection:'row',
              justifyContent:'space-between'
            }}>
             <TouchableOpacity style={{
                 flexDirection:'row',
                 alignItems:'center',
                 backgroundColor:'red',
                 width:'100%',
                 borderRadius:10,
                 justifyContent:'center',
                 paddingVertical:5,
             }}>
                 <Text style={{
                     color:'white',
                     paddingHorizontal:10,

                 }}>Supprimer l'annonce</Text>
                 <Icon 
          name={'delete'} 
          type={'MaterialCommunityIcons'}
          color={'#FFFFFF'}
          size={15}
          
          />
             </TouchableOpacity>
            </View>
            <View style={{
              height:1,
              borderColor:"#000000",
              borderWidth:0.5,
              marginVertical:10
            }}/>




            <View>



              <View style={{
                flexDirection:'row',
                alignItems:'center',
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
             

<View style={{
  flexDirection:'row',
  justifyContent:'space-between'
}}>
<Icon 
          name={'arrowdown'} 
          type={'ant-design'}
          color={'#800080'}
          size={20}
          
          />
            <Icon 
          name={'time-to-leave'} 
          type={'material-icons'}
          color={'#800080'}
          size={30}
          
          />
</View>

<View style={{
                flexDirection:'row',
                alignItems:'center',
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





            <View style={{
              height:1,
              borderColor:"#000000",
              borderWidth:0.5,
              marginVertical:10
            }}/>
            <View style={{
                paddingHorizontal:40
            }}>
            <View style={{
              flexDirection:'row',
              justifyContent:'space-between'
            }}>

                
            <View>
            <Text style={styles.txt1}>25kg</Text>
            <Text style={styles.txt2}>Poids</Text>
            </View>
            <View>
            <Text style={styles.txt1}>15.00TND</Text>
            <Text style={styles.txt2}>Prix/kg</Text>
            </View>
         

            


             </View>
             <View style={{
              flexDirection:'row',
              justifyContent:'space-between'
            }}>

                
          
         

            


             </View>
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
      width: 100,
      height: 100,
      borderRadius: 100/2,
      alignSelf:'center',
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
