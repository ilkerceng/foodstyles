import {StyleSheet} from 'react-native';
import React from 'react';
import LoginButton from './LoginButton';
import useIntl from '../../hooks/useIntl';

const EmailSignUp = () => {
  const {lang} = useIntl();
  return (
    <LoginButton label={lang('emailSignupButtonTitle')} onPress={() => false} />
  );
};

export default EmailSignUp;

const styles = StyleSheet.create({});
