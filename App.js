import 'react-native-gesture-handler'
import'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { theme } from './src/core/theme'

import {
  EditProfileScreen,
  ChangermotpasseScreen,
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  SurveillerScreen,
  ProfileScreen,
  Dashboard,
} from './src/screens'

const Stack = createStackNavigator()

export default function App() {

  return (

    
    <Provider theme={theme}>
      <NavigationContainer>

      
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="SurveillerScreen" component={SurveillerScreen} />
          <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        
          <Stack.Screen name="ResetPasswordScreen"component={ResetPasswordScreen}
          />
            <Stack.Screen name="ChangermotpasseScreen" component={ChangermotpasseScreen} />
            <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
        </Stack.Navigator>

      
      </NavigationContainer>
    </Provider>
   
  )
}
