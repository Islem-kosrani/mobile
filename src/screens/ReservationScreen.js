import React from 'react'
import { Animated,Modal, Text, View,SafeAreaView, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
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
export default function ReservationScreen({ navigation }) {
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
            }}>Missions</Text>
           
        </View>
        <FlatList
        data={data}
        renderItem={(item)=>{
            return    <TouchableOpacity onPress={() => setVisible(true)}><View style={[styles.card, styles.shadowProp]}>
          
          



            <View style={{
              flexDirection:'row',
            
            }}>



              <View style={{
                flexDirection:'row',
                alignItems:'center',
                alignSelf:'center',
              }}>
            
          <View style={{
            marginStart:10,
          }}>
            <Text style={styles.txt2}>Mission numero1</Text>
            <Text style={styles.txt2}>31/12/2022</Text>
          </View>
          <View>

          </View>


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
          
        }}>Mission</Text>
       <View style={styles.container}>
          <Text style={styles.title}>Date :</Text><Text>15/02/2020</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Départ  :</Text><Text>sousse,Tunisie</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Arrivée :</Text><Text>mahdia,Tunisie</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Poids(kg) :</Text><Text>1.5</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>
Nom et Prénom  d'expéditeur :</Text><Text>islem kosrani</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Numéro de téléphone :</Text><Text>56565656</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Nom et Prénom de receveur :</Text><Text>khaoula</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Numéro de téléphone :</Text><Text>56565656</Text>
        </View>



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
    color:"#800080"
  },
  txt2:{
    fontSize:17,
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
  header: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  container:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:2
  },
  title:{
    fontWeight:'bold',
    fontSize:16,
    color:'blue',
  }

});

