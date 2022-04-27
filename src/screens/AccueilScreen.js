import React from 'react'
import { Text, View,SafeAreaView, FlatList, StyleSheet, Image } from 'react-native'
import Background from '../components/Background'
import { Icon } from 'react-native-elements';


export default function AccueilScreen({ navigation }) {
    const [data,setData] = React.useState([{id:1},{id:2},{id:3},{id:4},{id:5}])
  return (
    <SafeAreaView style={{
        paddingTop:40,
    }}>
      <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:25,
      }}>
        <Text>Annonces:12</Text>

<View style={{
  flexDirection:'row'
}}>
<Text>Tri par : ...</Text>
<Icon 
          name={'arrow-drop-down'} 
          type={'material-icons'}
          color={'#0000FF'}
          size={15}
          
          />

</View>

      </View>
         <FlatList
        data={data}
        renderItem={(item)=>{
            return <View style={[styles.card, styles.shadowProp]}>
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
          name={'circle-thin'} 
          type={'font-awesome'}
          color={'#0000FF'}
          size={15}
          
          />
          <View style={{
            marginStart:10,
          }}>
            <Text style={styles.txt2}>Lyon,France</Text>
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
          color={'#0000FF'}
          size={20}
          
          />
            <Icon 
          name={'flight'} 
          type={'material-icons'}
          color={'#0000FF'}
          size={20}
          
          />
</View>

<View style={{
                flexDirection:'row',
                alignItems:'center',
              }}>
              <Icon 
          name={'map-marker'} 
          type={'font-awesome'}
          color={'#0000FF'}
          size={15}
          
          />
          <View style={{
            marginStart:10,
          }}>
            <Text style={styles.txt2}>Dakar,Sénégal</Text>
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
            <Text style={styles.txt1}>15.00$</Text>
            <Text style={styles.txt2}>Prix/kg</Text>
            </View>
            <View>
            <Image
  style={styles.image}
  source={{uri:"https://media.istockphoto.com/photos/closeup-portrait-of-her-she-nice-attractive-puzzled-ignorant-girl-picture-id1132758418?k=20&m=1132758418&s=612x612&w=0&h=ca6WVDDblf3um3mdfCSGVpLGfwuyjj5UTLD9rMMHfH4="}}
  resizeMode={"cover"} // <- needs to be "cover" for borderRadius to take effect on Android
/>
            </View>

            


             </View>
          </View>
        }}
        keyExtractor={item => item.id}
      />
     
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
      color:"#0000FF"
    },
    txt2:{
      fontSize:15,
      fontWeight:'normal',
      color:"gray"
    }
  });
