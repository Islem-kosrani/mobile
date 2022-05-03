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
 
const CustumInput = ({value,placeholder,onChangeText,title,editable,onPress,inputType}) => {
  const [userName, setUserName] = useState('');
  return (
    <SafeAreaView >
      <View style={styles.container}>
        <Text style={{
            color:'green',
            fontWeight:'bold',
        }}>{title}</Text>
        <TouchableOpacity onPress={onPress}  style={styles.input}>
        <TextInput
        editable={editable}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          keyboardType={inputType}
        />
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