import { format } from "prettier";
import React from "react";
import{View,Text,TouchableOpacity,ImageBackground,TextInput,StyleSheet, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Background from "../components/Background";
import BackButton from '../components/BackButton'
import { theme } from '../core/theme';
import { Feather, FontAwesome } from "@expo/vector-icons";
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
const EditProfileScreen =({ navigation })=>{

 renderInner = () =>(

     <View style={styles.panel}>
         <View style={{alignItems:'center'}}>

             <Text style={styles.panelTitle}>telecharger photo</Text>
             <Text style={styles.panelSubtitle}>choisir votre photo      </Text>
        
         </View>


         <TouchableOpacity style={styles.panelButton}>
             <Text style={styles.panelButtonTitle}>Prendre une photo</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.panelButton}>
             <Text style={styles.panelButtonTitle}>telecharger photo</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.panelButton} onPress={()=>this.bs.current.snapTo(1)}>
             <Text style={styles.panelButtonTitle}>Annuler</Text>
         </TouchableOpacity>


</View>
);
 renderHeader =() =>(
 <View style={styles.header}>
<View style={styles.panelHeader}>
<View style={styles.panelHandle}>

</View>
</View>
 </View>   
 );

    bs = React.createRef();
  fall = new Animated.Value(1);




    return(
        <Background>
             <BackButton goBack={navigation.goBack} />
        <View style={styles.container}>
<BottomSheet
    ref={this.bs}
    snapPoints={[300,0]}
renderContent={this.renderInner}
renderHeader={this.renderHeader}
    initialSnap={1}
    callbackNode={this.fall}
    enabledGestureInteraction={true}
/>

            <View style={{margin:20}}>
                <View style={{alignItems:'center'}}>


  <TouchableOpacity onPress={()=>this.bs.current.snapTo(0)}>
     <View style= {{height:100,width:100,borderRadius:14,justifyContent:'center',alignItems:'center',}}>
<ImageBackground 
source={{
    uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpEwvb5jXV6gwNDK3WzlsNqBm8tm8-m50d4gUxDGtvTSZ-S2OZGvPSHAZ-3NRFD43TEes&usqp=CAU',

   }}
     style={{height:100,width:100}}
     imageStyle={{borderRadius:20}} >

<View style={{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
}}>


<View>
    <Icon name="camera" size={35} color="#fff" style={{
        opacity:0.7,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderColor:'#fff',
        borderRadius:10,
    }}/>
</View>
</View>

     </ImageBackground>
                    </View>   
                    </TouchableOpacity>


                    <Text style={{marginTop:10,fontSize:18,fontWeight:'bold'}}> Islem Kosrani</Text>
                </View>

                <View style={styles.action}>
                    <FontAwesome name="user-o" size={20}/>
                    <TextInput
                    placeholder="Nom"
                    placeholderTextColor='#666666'
                    autoCorrect={false}
                    style={styles.TextInput}
                    
                    />
                </View> 

     



                <View style={styles.action}>
                    <FontAwesome name="user-o" size={20}/>
                    <TextInput
                    placeholder="Prenom"
                    placeholderTextColor='#666666'
                    autoCorrect={false}
                    style={styles.TextInput}
                    
                    />
                </View> 
                <View style={styles.action}>
                    <FontAwesome name="envelope-o" size={20}/>
                    <TextInput
                    placeholder="Email"
                    placeholderTextColor='#666666'
                    autoCorrect={false}
                    keyboardType='email-address'
                    style={styles.TextInput}
                    
                    />
                </View> 
                <View style={styles.action}>
                    <Feather name="phone" size={20}/>
                    <TextInput
                    placeholder="Telephone"
                    placeholderTextColor='#666666'
                    autoCorrect={false}
                    keyboardType='number-pad'
                    style={styles.TextInput}
                    
                    />
                </View> 
                <View style={styles.action}>
                    <Icon name="map-marker-outline" size={20}/>
                    <TextInput
                    placeholder="Adresse"
                    placeholderTextColor='#666666'
                    autoCorrect={false}
                    style={styles.TextInput}
                    
                    />
                </View> 

<TouchableOpacity style={styles.commandButton} onPress={()=>{}}>

    <Text style={styles.panelButtonTitle}>Modifier</Text>
</TouchableOpacity>


        </View>
       </View>
        </Background>
    );
};
export default EditProfileScreen;
const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    commandButton:{
        padding:16,
        borderRadius:10,
        backgroundColor:'#5E17EB',
        alignItems:'center',
        marginTop:20,
        

    },
    panel:{
        padding:20,
        backgroundColor:'#FFFFFF',
        paddingTop:20,
    },
    header:{
        backgroundColor:'#FFFFFF',
        shadowColor:'#333333',
       textShadowOffset:{width:-1,height:-3},
       shadowRadius:2,
       shadowOpacity:0.4,
       paddingTop:20,
       borderTopLeftRadius:20,
       borderTopRightRadius:20,
    },
    panelHeader:{
        alignItems:'center',
    },
    panelHandle:{
        width:40,
        height:8,
        borderRadius:4,
        backgroundColor:'#00000040',
        marginBottom:10,
    },
    panelTitle:{
        fontSize:27,
        height:35,
    },
    panelSubtitle:{
        fontSize:14,
        color:'gray',
        height:30,
        marginBottom:10,
    },
    panelButton:{
      padding:13,
      borderRadius:10,
      backgroundColor:'#5E17EB'  ,
      alignItems:'center',
      marginVertical:7,
    },
    panelButtonTitle:{
        fontSize:17,
        fontWeight:'bold',
        color:'white',
    },
    action:{
        flexDirection:'row',
        marginTop:20,
marginBottom:10,
borderBottomWidth:1,
borderBottomColor:'#f2f2f2',
paddingBottom:10,
        
    },
    actionError:{
        flexDirection:'row',
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor:'#FF0000',
        paddingBottom:5,

    },
    TextInput:{
        flex:1,
        marginTop:5,
        paddingLeft:1,
        color:"#05375a"
    },
    

})