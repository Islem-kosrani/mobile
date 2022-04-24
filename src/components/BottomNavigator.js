import React from 'react';
import { Text,View,StyleSheet,TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements';
import { color } from 'react-native-reanimated';

const ButtonNavigator=()=>{

    return(

        
        <View style= {styles.container}>

            <TouchableOpacity style={styles.floatingButton}>
            <Icon 
      name={'plus'} 
      type={'font-awesome-5'}
      color={'#800080'}
      containerStyle={{alignSelf:'center'}}
      reverse
      size={25}
      
      />

            </TouchableOpacity>
<View style={styles.bottomBar}>
  <TouchableOpacity style={styles.barItemView}>
      <Icon 
      name={'home'} 
      type={'material-community'}
      color={'#800080'}
      size={30}
      
      />


      <Text>Accueil</Text>
  </TouchableOpacity>


  <TouchableOpacity style={styles.barItemView}>
      <Icon 
      name={'list'} 
      type={'material'}
      color={'#800080'}
      size={30}
      
      />


      <Text>Annonces</Text>
  </TouchableOpacity>

  <View style={styles.barItemView}>
    
      <Text style={styles.PostButton}>Publier</Text>
  </View>
  <TouchableOpacity style={styles.barItemView}>
      <Icon 
      name={'shopping-cart'} 
      type={'feather'}
      color={'#800080'}
      size={30}
      
      />


      <Text>Réservations</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.barItemView}>
      <Icon 
      name={'person'} 
      type={'material'}
      color={'#800080'}
      size={30}
      
      />


      <Text>Profil</Text>
  </TouchableOpacity>
</View></View>
    )
}
export default ButtonNavigator;
const styles=StyleSheet.create({
container:{
height:60,
justifyContent:'flex-end',
backgroundColor:'yellow',
},
    bottomBar:{
        backgroundColor:'#f2f7fcff',
        width:'115%',
        height:65,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:20,
        paddingVertical:16,

    },


    barItemView:{
      
        alignItems:'center',
        justifyContent:'flex-end',
    },
    floatingButton:{
        position:'absolute',
        alignSelf:'center',
        backgroundColor:'#f8f4f4',
        width:70,
        height:70,
        borderRadius:25,
        zIndex:10,
        bottom:30,
    },
    PostButton:{
color:'#186ADF',
marginTop:3,
marginLeft:20,
fontWeight:'bold',
    },
    Text:{
    color:'#696969',
    marginTop:3,
    },
});