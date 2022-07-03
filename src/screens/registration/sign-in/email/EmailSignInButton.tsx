import {useNavigation} from '@react-navigation/native';
import React from 'react';
import LoginButton from '../../LoginButton';
import {LoginType} from '../../types';

const EmailSignInButton = ({label}: LoginType) => {
  const navigation = useNavigation();
  return (
    <LoginButton
      labelVariant={'TEXT_STYLE'}
      link
      label={label}
      onPress={() => navigation.navigate('EmailSignIn')}
    />
  );
};

export default EmailSignInButton;
