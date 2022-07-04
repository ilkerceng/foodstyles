import {Platform, StyleSheet} from 'react-native';
import React from 'react';
import useIntl from '../../hooks/useIntl';
import {Image, Text, View} from 'react-native-ui-lib';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppleSignInButton from './sign-in/apple/AppleSignInButton';
import GoogleSignInButton from './sign-in/google/GoogleSignInButton';
import Spacer from '../../components/Spacer';
import EmailSignUp from './sign-up/EmailSignUp';
import FacebookSignInButton from './sign-in/facebook/FacebookSignInButton';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../theme/initDesignSystem';
import Logo3x from '../../assets/images/logo3x.png';
import EmailSignInButton from './sign-in/email/EmailSignInButton';
import PrivacyPolicy from '../privacy-policy/PrivacyPolicy';

const LoginScreen = () => {
  const {lang} = useIntl();

  return (
    <LinearGradient
      colors={[colors.MAIZE, colors.ORANGISH]}
      style={styles.linearGradient}
    >
      <SafeAreaView edges={[]} style={{...styles.container}}>
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
            <Spacer space={15}>
              {Platform.OS === 'ios' ? (
                <AppleSignInButton label={lang('appleSigninButtonTitle')} />
              ) : null}
              <FacebookSignInButton label={lang('facebookSigninButtonTitle')} />
              <GoogleSignInButton label={lang('googleSigninButtonTitle')} />
              <EmailSignUp />
              <EmailSignInButton label="Log in with Email" />
            </Spacer>
          </View>
          <View>
            <PrivacyPolicy />
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  linearGradient: {
    flex: 1,
    flexDirection: 'row',
  },
});
