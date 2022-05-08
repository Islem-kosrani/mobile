import React from 'react'
import {  Animated,  Modal,Text, View,SafeAreaView, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Background from '../components/Background'
import { Icon } from 'react-native-elements';
import { theme } from '../core/theme';


const ModalPoup = ({visible, children}) => {
    const [showModal, setShowModal] = React.useState(visible);
    const scaleValue = React.useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
      toggleModal();
    }, [visible]);
    const toggleModal = () => {
      if (visible) {
        setShowModal(true);
        Animated.spring(scaleValue, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }).start();
      } else {
        setTimeout(() => setShowModal(false), 200);
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    };
    return (
      
      <Modal transparent visible={showModal}>
        <View style={styles.modalBackGround}>
          <Animated.View
            style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
            {children}
          </Animated.View>
        </View>
      </Modal>
    );
  };

export default function NotificationScreen({ navigation }) {
    const [data,setData] = React.useState([{id:1},{id:2},{id:3},{id:4},{id:5}])
    const [visible, setVisible] = React.useState(false);

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
            }}>Notifications</Text>
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
        renderItem={(item)=>{
            return <TouchableOpacity onPress={()=>{
                setVisible(true)
            }}><View style={[styles.card, styles.shadowProp]}>

            <View style={{
              flexDirection:'row',
            }}>
  <View>
            <Image
  style={styles.image}
  source={{uri:"https://media.istockphoto.com/photos/closeup-portrait-of-her-she-nice-attractive-puzzled-ignorant-girl-picture-id1132758418?k=20&m=1132758418&s=612x612&w=0&h=ca6WVDDblf3um3mdfCSGVpLGfwuyjj5UTLD9rMMHfH4="}}
  resizeMode={"cover"} // <- needs to be "cover" for borderRadius to take effect on Android
/>

</View>

            <View style={{
                marginStart:10,
                

            }}>
            <Text style={styles.txt1}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
            <Text style={styles.txt2}>4h</Text>
            </View>
            
            <View>
            
            </View>

            


             </View>
          </View></TouchableOpacity>
        }}
        keyExtractor={item => item.id}
      />
     
     <ModalPoup visible={visible}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Image
                source={require('../assets/X.png')}
                style={{height: 30, width: 30}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
        
        </View>
        <Text style={{
          textAlign:'center',
          fontWeight:'bold',
          fontSize:16,
          
        }}>Notification</Text>
         <Text style={{
          textAlign:'center',
          fontWeight:'300',
          fontSize:16,
          marginTop:5
          
        }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
             

      </ModalPoup>
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
      color:"#000000",
      marginEnd:10
    },
    txt2:{
      fontSize:15,
      fontWeight:'normal',
      color:"gray"
    },
    row: {
        flexDirection: 'row',
        marginTop: 30,
      },
      link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
      },
      modalBackGround: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalContainer: {
        width: '80%',
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        elevation: 20,
      },
  });
