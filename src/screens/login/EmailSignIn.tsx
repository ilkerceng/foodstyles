import React from 'react';
import LoginButton from './LoginButton';
import {LoginType} from './types';

const EmailSignIn = ({label}: LoginType) => {
  return (
    <LoginButton
      labelVariant={'TEXT_STYLE'}
      link
      label={label}
      onPress={() => false}
    />
  );
};

export default EmailSignIn;
