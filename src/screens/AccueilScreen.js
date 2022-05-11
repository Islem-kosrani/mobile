import React,{useState} from 'react'
import { Text, View,SafeAreaView, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Background from '../components/Background'
import { Icon } from 'react-native-elements';
import Dropdown from '../components/Dropdown';
import DatePicker from 'react-native-datepicker';


export default function AccueilScreen({ navigation }) {
    const [data,setData] = React.useState([{id:1},{id:2},{id:3},{id:4},{id:5}])
    const [showSearch,setShowSearch] = useState("")
    const [depart,setDepart] = useState("")
    const [arrivee,setArrive] = useState("")
    const [dateStart, setDateStart] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const villes = [
      { label: 'Tunis', value: '1' },
      { label: 'Sfax', value: '2' },
      { label: 'Sousse', value: '3' },
      { label: 'Kairouan', value: '4' },
      { label: 'Bizerte', value: '5' },
      { label: 'Gabès', value: '6' },
      { label: 'Ariana', value: '7' },
      { label: 'Gafsa', value: '8' },
      { label: 'Monastir', value: '9' },
      { label: 'Ben Arous', value: '10' },
      { label: 'Kasserine', value: '11' },
      { label: 'Médenine', value: '12' },
      { label: 'Nabeul', value: '13' },
      { label: 'Tataouine', value: '14' },
      { label: 'Béja', value: '15' },
      { label: 'Le Kef', value: '16' },
      { label: 'Mahdia', value: '17' },
      { label: 'Sidi Bouzid', value: '18' },
      { label: 'Jendouba', value: '19' },
      { label: 'Tozeur', value: '20' },
      { label: 'La Manouba', value: '21' },
      { label: 'Siliana', value: '22' },
      { label: 'Zaghouan', value: '23' },
      { label: 'Kébili', value: '24' },
    
    ];
  return (
    <SafeAreaView style={{
      paddingTop:40,
  }}>
        {showSearch==false?<View style={{
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
             
        </View>:null}
        <View style={{
          flexDirection:'row',
          justifyContent:'space-between',
          marginHorizontal:40,
          marginTop:5
        }}>
          <View/>
          <TouchableOpacity
          onPress={()=>{
            setShowSearch(!showSearch)
          }}
          style={{
                backgroundColor:'green',
                width:40,
                height:40,
                borderRadius:40/2,
                alignItems:'center',
                justifyContent:'center',
                
             
            }}>
            <Icon 
          name={'search'} 
          type={'fontisto'}
          color={'#FFFFFF'}
          size={25}
          
          />
            </TouchableOpacity>
        </View>
        {showSearch?<View>
          <Dropdown title={"Départ"} label="D où partez-vous ?" data={villes} onSelect={setDepart} />
        <Dropdown title={"Arrivée"} label="Où partez-vous ?" data={villes} onSelect={setArrive} />
        <Text style={{
            color:'#1935F1',
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
          date={dateStart} //initial date from state
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
            setDateStart(date);
          }}
        />
          <Text style={{
            color:'#1935F1',
            fontWeight:'bold',
            marginHorizontal:20,
            paddingTop:10,
        }}>Daté arrivée</Text>
          <DatePicker
          minDate={dateStart}
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
            if(dateStart<=date){
              setEndDate(date);
            }
          
          }}
        />
        <TouchableOpacity onPress={() => {
            
              
          }} style={{
            backgroundColor:
            '#623262',
            padding:10,
            marginTop:20,
            borderRadius:5,
            marginHorizontal:10,
            width:'93%'

          }}>
            <Text style={{
              color:'white',
              fontWeight:'bold',
              textAlign:'center',
            }}>Rechercher</Text>
          </TouchableOpacity>
        </View>:<View/>}
         

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
              bottom:80,
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
