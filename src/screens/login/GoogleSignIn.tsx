import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LoginButton from './LoginButton';
import {GoogleColoredIcon} from '../../assets/icons';
import {LoginType} from './types';

const GoogleSignIn = ({label}: LoginType) => {
  return (
    <LoginButton label={label} onPress={() => false} Icon={GoogleColoredIcon} />
  );
};

export default GoogleSignIn;
