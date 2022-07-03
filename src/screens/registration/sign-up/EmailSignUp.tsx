import React from 'react';
import LoginButton from '../LoginButton';
import useIntl from '../../../hooks/useIntl';
import {useNavigation} from '@react-navigation/native';

const EmailSignUp = () => {
  const {lang} = useIntl();
  const navigation = useNavigation();

  return (
    <LoginButton
      label={lang('emailSignupButtonTitle')}
      onPress={() => {
        navigation.navigate('EmailSignUp');
      }}
    />
  );
};

export default EmailSignUp;
