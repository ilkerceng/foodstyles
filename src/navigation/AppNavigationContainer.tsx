import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {defaultScreenStackOptions} from './config';
import LoginScreen from '../screens/registration/LoginScreen';
import {Routes} from './routesNames';
import EmailSignUpScreen from '../screens/registration/sign-up/EmailSignUpScreen';
import EmailSignInScreen from '../screens/registration/sign-in/email/EmailSignInScreen';
import {useUserStore} from '../store/userStore';
import RNCreatedScreen from '../screens/RNCreatedScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';

const AuthStack = createStackNavigator();
const RegistrationStack = createStackNavigator();

function RegistrationNavigator() {
  return (
    <RegistrationStack.Navigator
      initialRouteName={Routes.EmailSignIn}
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
      initialRouteName={Routes.Profile}
      screenOptions={{...defaultScreenStackOptions}}
    >
      <AuthStack.Screen component={RNCreatedScreen} name={'gql'} />
      <AuthStack.Screen
        component={ProfileScreen}
        name={Routes.Profile}
        options={{
          title: Routes.Profile,
          headerBackTitleVisible: true,
          headerBackTitle: 'Test',
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
}

function AppStack() {
  const {user} = useUserStore();
  return user?.accessToken ? <AuthNavigator /> : <RegistrationNavigator />;
}

const AppNavigationContainer = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
