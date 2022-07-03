import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {defaultScreenStackOptions} from './config';
import LoginScreen from '../screens/registration/LoginScreen';
import {Routes} from './routesNames';
import TextInputExample from '../components/Form/TextInputExample';
import EmailSignUpScreen from '../screens/registration/sign-up/EmailSignUpScreen';

const AuthStack = createStackNavigator();
const RegistrationStack = createStackNavigator();

function RegistrationNavigator() {
  return (
    <RegistrationStack.Navigator
      initialRouteName={Routes.LOGIN}
      // initialRouteName={'TextInputExample'}
      screenOptions={{
        ...defaultScreenStackOptions,
      }}
    >
      <RegistrationStack.Screen component={LoginScreen} name={Routes.LOGIN} />
      <RegistrationStack.Screen
        component={TextInputExample}
        name={'TextInputExample'}
      />
      <RegistrationStack.Screen
        component={EmailSignUpScreen}
        name={'EmailSignUp'}
        options={{
          title: 'Sign up with Email',
          // headerShown: true,
          // headerTransparent: true,
          // title: 'Sign up with Email',
        }}
      />
    </RegistrationStack.Navigator>
  );
}

function AuthNavigator() {
  return (
    <AuthStack.Navigator
      initialRouteName={Routes.REGISTRATION_NAVIGATOR}
      screenOptions={{...defaultScreenStackOptions}}
    >
      <AuthStack.Screen
        component={RegistrationNavigator}
        name={Routes.REGISTRATION_NAVIGATOR}
      />
    </AuthStack.Navigator>
  );
}

const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
