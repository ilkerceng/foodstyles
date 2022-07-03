import React from 'react';
import LoginButton from '../../LoginButton';
import {FacebookIcon} from '../../../../assets/icons';
import {LoginType} from '../../types';

const FacebookSignInButton = ({label}: LoginType) => {
  return (
    <LoginButton label={label} onPress={() => false} Icon={FacebookIcon} />
  );
};

export default FacebookSignInButton;
