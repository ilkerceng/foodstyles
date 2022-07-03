import React from 'react';
import LoginButton from '../../LoginButton';
import {GoogleColoredIcon} from '../../../../assets/icons';
import {LoginType} from '../../types';

const GoogleSignInButton = ({label}: LoginType) => {
  return (
    <LoginButton label={label} onPress={() => false} Icon={GoogleColoredIcon} />
  );
};

export default GoogleSignInButton;
