import React from 'react';
import {
  View,
  StyleSheet,
  Button,
  Modal,
  Image,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Background from '../components/Background';
import BackButton from '../components/BackButton'
import { theme } from '../core/theme';
import Logo from '../components/Logo'
import Header from '../components/Header'
import CustumInput from '../components/CustumInput';


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

const DetailsColis = ({ navigation }) => {
  const [visible, setVisible] = React.useState(false);
  const [visibleConfirm, setVisibleConfirm] = React.useState(false);
    // To set the default Star Selected
    const [defaultRating, setDefaultRating] = React.useState(2);
    // To set the max number of Stars
    const [maxRating, setMaxRating] = React.useState([1, 2, 3, 4, 5]);
      // Filled Star. You can also give the path from local
  const starImageFilled =
  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
// Empty Star. You can also give the path from local
const starImageCorner =
  'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';

    const CustomRatingBar = () => {
      return (
        <View style={{
          justifyContent: 'center',
          flexDirection: 'row',
          marginTop: 30,
        }}>
          {maxRating.map((item, key) => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                key={item}
                onPress={() => setDefaultRating(item)}>
                <Image
                  style={{  width: 40,
                    height: 40,
                    resizeMode: 'cover',}}
                  source={
                    item <= defaultRating
                      ? { uri: starImageFilled }
                      : { uri: starImageCorner }
                  }
                />
              </TouchableOpacity>
            );
          })}
        </View>
      );
    };

    

  return (
    <Background>
       <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Surveiller Votre Colis..</Header>
    <View style={{flex: 1, }}>
    
    
      
        <View style={{alignItems: 'center'}}>
        
        </View>
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
        <View style={{height:20}}></View>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => setVisibleConfirm(true)} style={{
            backgroundColor:'#5E17EB',
            padding:10,
            borderRadius:10,
            width:'48%'

          }}>
            <Text style={{
              color:'white',
              fontWeight:'bold',
              textAlign:'center',
            }}>BIEN RECU</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setVisible(false)} style={{
            backgroundColor:'#5E17EB',
            padding:10,
            borderRadius:10,
            width:'48%'

          }}>
            <Text style={{
              color:'white',
              fontWeight:'bold',
              textAlign:'center',
            }}>QUITTER</Text>
          </TouchableOpacity>
        </View>
       
      <ModalPoup visible={visibleConfirm}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setVisibleConfirm(false)}>
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
          
        }}>Mission accomplie</Text>
         <Text style={{
          textAlign:'center',
          fontWeight:'300',
          fontSize:16,
          marginTop:5
          
        }}>Merci d'avoir utilisé note service</Text>
         <Text style={{
          textAlign:'center',
          fontWeight:'300',
          fontSize:16,
          marginTop:5
        }}>Nous espérons que tout s'est bien passé</Text>
          <Text style={{
          textAlign:'center',
          fontWeight:'bold',
          fontSize:16,
          marginTop:5
        }}>Evaluez cette expérience :</Text>


                <CustomRatingBar />

      </ModalPoup>
    
    </View>
    </Background>
  );
};

const styles = StyleSheet.create({

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
export default DetailsColis;