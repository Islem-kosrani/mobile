import React from 'react'
import { Text, View,SafeAreaView, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Background from '../components/Background'
import { Icon } from 'react-native-elements';


export default function AccueilScreen({ navigation }) {
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
            }}>Chrono Liv</Text>
             
        </View>
       

         <FlatList
        data={data}
        renderItem={(item)=>{
            return <View onPress={()=>{
             
            }}><View style={[styles.card, styles.shadowProp]}>
               <TouchableOpacity
               onPress={()=>{
                 navigation.navigate("AddArticle")
               }}
               style={{
                 flexDirection:'row',
                 alignItems:'center',
                 backgroundColor:'green',
                 width:'100%',
                 borderRadius:10,
                 justifyContent:'center',
                 paddingVertical:10,
                 marginVertical:5,
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
            <View style={{
              flexDirection:'row',
              justifyContent:'space-between'
            }}>

             <Text>Départ dans :</Text><Text>22-04-2022 15:00:00</Text>
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
              flexDirection:'row',
              justifyContent:'space-between'
            }}>


            <View>
            <Text style={styles.txt1}>25kg</Text>
            <Text style={styles.txt2}>Poids</Text>
            </View>
            <View>
            <Text style={styles.txt1}>15.00Dt</Text>
            <Text style={styles.txt2}>Prix/kg</Text>
            </View>
            <View>
              <View>
            <Image
  style={styles.image}
  source={{uri:"https://media.istockphoto.com/photos/closeup-portrait-of-her-she-nice-attractive-puzzled-ignorant-girl-picture-id1132758418?k=20&m=1132758418&s=612x612&w=0&h=ca6WVDDblf3um3mdfCSGVpLGfwuyjj5UTLD9rMMHfH4="}}
  resizeMode={"cover"} // <- needs to be "cover" for borderRadius to take effect on Android
/>
<View style={{
    flexDirection:'row',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    
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
</View>
            </View>

            


             </View>
          </View></View>
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
              bottom:60,
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
