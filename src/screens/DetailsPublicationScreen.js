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
                 backgroundColor:'green',
                 width:'100%',
                 borderRadius:10,
                 justifyContent:'center',
                 paddingVertical:5,
             }}>
                 <Text style={{
                     color:'white',
                     paddingHorizontal:10,

                 }}>Réserver</Text>
                 <Icon 
          name={'shopping-cart'} 
          type={'feather'}
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

                
            <View>
            <Text style={styles.txt1}>15.00TND</Text>
            <Text style={styles.txt2}>Prix/Enveloppe</Text>
            </View>
            <View style={{
                alignItems:'flex-end'
            }}>
            <Text style={styles.txt1}>15.00TND</Text>
            <Text style={styles.txt2}>Prix/Téléphone</Text>
            </View>
         

            


             </View>
            </View>
           
          </View>
          <View style={[styles.card, styles.shadowProp]}>
              
            <View style={{
              flexDirection:'column',
              justifyContent:'space-between'
            }}>
                <Image
  style={styles.image}
  source={{uri:"https://media.istockphoto.com/photos/closeup-portrait-of-her-she-nice-attractive-puzzled-ignorant-girl-picture-id1132758418?k=20&m=1132758418&s=612x612&w=0&h=ca6WVDDblf3um3mdfCSGVpLGfwuyjj5UTLD9rMMHfH4="}}
  resizeMode={"cover"} // <- needs to be "cover" for borderRadius to take effect on Android
/>
<Text style={{
    textAlign:'center',
    paddingVertical:10
}}>Ben mamadou lien</Text>
<View style={{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
}}>
<Icon 
          name={'star-border'} 
          type={'material-icons'}
          color={'#BD63D6'}
          size={15}
          
          />
          <Icon 
          name={'star-border'} 
          type={'material-icons'}
          color={'#BD63D6'}
          size={15}
          
          />
          <Icon 
          name={'star-border'} 
          type={'material-icons'}
          color={'#BD63D6'}
          size={15}
          
          />
          <Icon 
          name={'star-border'} 
          type={'material-icons'}
          color={'#BD63D6'}
          size={15}
          
          />
          <Icon 
          name={'star-border'} 
          type={'material-icons'}
          color={'#BD63D6'}
          size={15}
          
          />
          <Icon 
          name={'star-border'} 
          type={'material-icons'}
          color={'#BD63D6'}
          size={15}
          
          />
</View>
             <View style={{
                 flexDirection:'row',
                 justifyContent:'space-between',
                 

             }}>
             <TouchableOpacity style={{
                 flexDirection:'row',
                 alignItems:'center',
                 backgroundColor:'green',
                 width:50,
                 height:50,
                 borderRadius:50/2,
                 justifyContent:'center',
                 paddingVertical:5,
             }}>
                
                 <Icon 
          name={'phone'} 
          type={'Ant-design'}
          color={'#FFFFFF'}
          size={25}
          
          />
             </TouchableOpacity>
             <TouchableOpacity style={{
                 flexDirection:'row',
                 alignItems:'center',
                 backgroundColor:'#0000FF',
                 width:50,
                 height:50,
                 borderRadius:50/2,
                 justifyContent:'center',
                 paddingVertical:5,
             }}>
                
                 <Icon 
          name={'message'} 
          type={'material-icons'}
          color={'#FFFFFF'}
          size={25}
          
          />
             </TouchableOpacity>
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
