import {Platform, StyleSheet} from 'react-native';
import React from 'react';
import useIntl from '../../hooks/useIntl';
import {Image, Text, View} from 'react-native-ui-lib';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppleSignIn from './AppleSignIn';
import GoogleSignIn from './GoogleSignIn';
import LoginButtonView from './LoginButtonView';
import EmailSignUp from './EmailSignUp';
import FacebookSignIn from './FacebookSignIn';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../theme/initDesignSystem';

import Logo3x from '../../assets/images/logo3x.png';
import EmailSignIn from './EmailSignIn';
import PrivacyPolicy from '../privacy-policy/PrivacyPolicy';

const LoginScreen = () => {
  const {lang} = useIntl();

  return (
    <SafeAreaView edges={[]} style={{flex: 1, ...styles.container}}>
      <LinearGradient
        colors={[colors.MAIZE, colors.ORANGISH]}
        style={styles.linearGradient}
      >
        <View flex centerH marginT-100 marginB-22>
          <View flex centerH>
            <Image style={{width: 100, height: 100}} source={Logo3x} />
            <Text
              marginT-15
              TEXT_STYLE_5
              style={{
                fontSize: 40,
                lineHeight: 40,
                color: colors.WHITE,
                fontWeight: 'bold',
                letterSpacing: -0,
              }}
            >
              {lang('appName')}
            </Text>
            <Text
              marginV-30
              style={{width: 300, textAlign: 'center'}}
              TEXT_STYLE_3
            >
              {lang('signInMessage')}
            </Text>
            <LoginButtonView>
              {Platform.OS === 'ios' ? (
                <AppleSignIn label={lang('appleSigninButtonTitle')} />
              ) : null}
              <FacebookSignIn label={lang('facebookSigninButtonTitle')} />
              <GoogleSignIn label={lang('googleSigninButtonTitle')} />
              <EmailSignUp />
              <EmailSignIn label="Log in with Email" />
            </LoginButtonView>
          </View>
          <View>
            <PrivacyPolicy />
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
  },
  linearGradient: {
    flex: 1,
    flexDirection: 'row',
  },
});
