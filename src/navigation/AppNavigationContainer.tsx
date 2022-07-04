import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {defaultScreenStackOptions} from './config';
import LoginScreen from '../screens/registration/LoginScreen';
import {Routes} from './routesNames';
import EmailSignUpScreen from '../screens/registration/sign-up/EmailSignUpScreen';
import EmailSignInScreen from '../screens/registration/sign-in/email/EmailSignInScreen';
import {useUserStore} from '../store/userStore';
import ProfileScreen from '../screens/profile/ProfileScreen';
import CardScreen from '../screens/card-list/CardScreen';
import {setContext} from '@apollo/client/link/context';

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
      initialRouteName={Routes.CardListScreen}
      screenOptions={{...defaultScreenStackOptions}}
    >
      <AuthStack.Screen component={CardScreen} name={'gql'} />
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

  React.useEffect(() => {
    if (user?.accessToken) {
      setContext((_, {headers}) => {
        return {
          headers: {
            ...headers,
            authorization: user?.accessToken
              ? `Bearer ${user?.accessToken}`
              : '',
          },
        };
      });
    }
    return () => {};
  }, [user]);

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
