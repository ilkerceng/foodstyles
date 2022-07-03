import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {defaultScreenStackOptions} from './config';
import LoginScreen from '../screens/registration/LoginScreen';
import {Routes} from './routesNames';
import EmailSignUpScreen from '../screens/registration/sign-up/EmailSignUpScreen';
import EmailSignInScreen from '../screens/registration/sign-in/email/EmailSignInScreen';

const AuthStack = createStackNavigator();
const RegistrationStack = createStackNavigator();

function RegistrationNavigator() {
  return (
    <RegistrationStack.Navigator
      initialRouteName={Routes.Login}
      screenOptions={{
        ...defaultScreenStackOptions,
      }}
    >
      <RegistrationStack.Screen component={LoginScreen} name={Routes.Login} />
      <RegistrationStack.Screen
        component={EmailSignInScreen}
        name={'EmailSignIn'}
        options={{
          title: Routes.EmailSignIn,
        }}
      />
      <RegistrationStack.Screen
        component={EmailSignUpScreen}
        name={'EmailSignUp'}
        options={{
          title: Routes.EmailSignUp,
        }}
      />
    </RegistrationStack.Navigator>
  );
}

function AuthNavigator() {
  return (
    <AuthStack.Navigator
      initialRouteName={Routes.Registration}
      screenOptions={{...defaultScreenStackOptions}}
    >
      <AuthStack.Screen
        component={RegistrationNavigator}
        name={Routes.Registration}
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
