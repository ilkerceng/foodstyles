import {View} from 'react-native-ui-lib';
import React from 'react';
import {AppleIcon} from '../../../../assets/icons';
import LoginButton from '../../LoginButton';
import {LoginType} from '../../types';

const AppleSignInButton = (props: LoginType) => {
  return (
    <View marginB-s4>
      <LoginButton label={props.label} onPress={() => false} Icon={AppleIcon} />
    </View>
  );
};

export default AppleSignInButton;
