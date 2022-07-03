import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ThemeScreen from '../theme/ThemeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {defaultScreenStackOptions} from './config';
import LoginScreen from '../screens/login/LoginScreen';
import {Routes} from './routesNames';

const AuthStack = createStackNavigator();
const RegistrationStack = createStackNavigator();

function RegistrationNavigator() {
  return (
    <RegistrationStack.Navigator
      initialRouteName={Routes.LOGIN}
      screenOptions={{
        ...defaultScreenStackOptions,
      }}
    >
      <RegistrationStack.Screen
        component={LoginScreen}
        name={Routes.LOGIN}
        options={{
        //   headerShown: true,
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
