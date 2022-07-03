import React from 'react';
import LoginButton from './LoginButton';
import {FacebookIcon} from '../../assets/icons';
import {LoginType} from './types';

const FacebookSignIn = ({label}: LoginType) => {
  return (
    <LoginButton label={label} onPress={() => false} Icon={FacebookIcon} />
  );
};

export default FacebookSignIn;
