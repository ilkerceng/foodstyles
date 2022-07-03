import {View} from 'react-native-ui-lib';
import React from 'react';
import {AppleIcon} from '../../assets/icons';
import LoginButton from './LoginButton';
import {Platform} from 'react-native';
import {LoginType} from './types';

const AppleSignIn = (props: LoginType) => {
  return (
    <View marginB-s4>
      <LoginButton label={props.label} onPress={() => false} Icon={AppleIcon} />
    </View>
  );
};

export default AppleSignIn;
