import React, {useState} from 'react';
import { Icon } from 'react-native-elements';

//import all the components we are going to use
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity
} from 'react-native';
 
const CustumInput = ({onCancel,value,placeholder,onChangeText,title,editable,onPress,inputType,from}) => {
  const [userName, setUserName] = useState('');
  return (
    <SafeAreaView >
      <View style={styles.container}>
        <Text style={{
            color:'#1935F1',
            fontWeight:'bold',
        }}>{title}</Text>
        <TouchableOpacity onPress={onPress}  style={styles.input}>
        <TextInput
        maxLength={title=="Téléphone"?8:255}
        
        editable={editable}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          keyboardType={inputType}
        />
       { from=="Profile"?<TouchableOpacity onPress={onCancel} style={{
          position:'absolute',
          right:10,
          top:10
        }}>
        <Icon 
          name={'closecircle'} 
          type={'ant-design'}
          color={'#623262'}
          size={25}
          
          />
        </TouchableOpacity>:null}
        </TouchableOpacity>
      
           

      </View>
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    paddingHorizontal:20,
    paddingVertical:10,
   
  },
  input: {
    width: '100%',
    height: 44,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#e8e8e8'
  },
});
 
export default CustumInput;