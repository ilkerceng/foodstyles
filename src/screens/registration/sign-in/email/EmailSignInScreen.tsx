import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {colors, typographies} from '../../../../theme/initDesignSystem';
import TextInput, {
  ErrorMessage,
  ServerErrorFormMessage,
} from '../../../../components/Form/TextInput';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Spacer from '../../../../components/Spacer';
import {Button, View} from 'react-native-ui-lib';
import {Controller, useForm} from 'react-hook-form';
import {FloatingHeader} from '../../../../navigation/NavigationComponents';
import {Route} from '@react-navigation/native';
import {Routes} from '../../../../navigation/routesNames';
import {useLoginWithEmail} from '../../../../services/authentication.service';
import {useUserStore} from '../../../../store/userStore';
import {DEFAULT_REQUIRED_MESSAGE} from '../../../../config/constants';

export type EmailSignUpProps = {
  email: string;
  password: string;
};

const EmailSignInScreen = ({route}: {route: Route<any>}) => {
  const {
    control,
    handleSubmit,
    setError,
    clearErrors,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: 'john@doe.com',
      password: 'p4SSW0rd',
      loginError: '',
    },
  });
  const [loginWithEmail, {data, loading, error}] = useLoginWithEmail();
  const {setUser} = useUserStore();
  const [showForgotPasswordLink, setShowForgotPasswordLink] = useState(false);

  const onSubmit = ({email, password}: EmailSignUpProps) => {
    loginWithEmail({
      variables: {email, password},
      onError: () => {
        setError('loginError', {
          message: error?.message || '',
        });
        setShowForgotPasswordLink(true);
        //
      },
      onCompleted(data) {
        setUser(data.loginWithEmail);
      },
    });
  };

  return (
    <LinearGradient
      colors={[colors.MAIZE, colors.ORANGISH]}
      style={styles.linearGradient}
    >
      <SafeAreaView edges={['top']} style={{...styles.container}}>
        <FloatingHeader title={Routes[route.name]} />
        <View style={styles.contentContainer}>
          <Spacer space={13}>
            <Controller
              control={control}
              rules={{
                required: {
                  message: DEFAULT_REQUIRED_MESSAGE,
                  value: true,
                },
              }}
              name="email"
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  keyboardType="email-address"
                  label="Email"
                  onBlur={onBlur}
                  onChangeText={text => {
                    onChange(text);
                    clearErrors('loginError');
                  }}
                  value={value}
                />
              )}
            />
            <ErrorMessage message={errors.email?.message} />
            <Controller
              control={control}
              rules={{
                required: {
                  message: DEFAULT_REQUIRED_MESSAGE,
                  value: true,
                },
                minLength: {
                  message: 'Password should be more than 6 characters',
                  value: 6,
                },
              }}
              name="password"
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  label="Password"
                  onBlur={onBlur}
                  onChangeText={text => {
                    onChange(text);
                    clearErrors('loginError');
                  }}
                  value={value}
                />
              )}
            />
            <ErrorMessage message={errors.password?.message} />
            <ServerErrorFormMessage message={errors.loginError?.message} />
            <View center>
              <Button
                label="LOG IN"
                backgroundColor={colors.AQUA_GREEN}
                labelStyle={{
                  ...typographies.TEXT_STYLE_5,
                  fontSize: 16,
                  letterSpacing: 1,
                }}
                style={{width: 152, height: 43}}
                onPress={handleSubmit(onSubmit)}
              />
            </View>
            {showForgotPasswordLink ? (
              <View center>
                <Button
                  label="Forgot my password"
                  backgroundColor={colors.AQUA_GREEN}
                  labelStyle={{
                    ...typographies.TEXT_STYLE,
                    fontSize: 16,
                  }}
                  link
                  onPress={() => false}
                />
              </View>
            ) : null}
          </Spacer>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  contentContainer: {
    paddingHorizontal: 38,
    marginTop: 18,
  },
  linearGradient: {
    flex: 1,
  },
});

export default EmailSignInScreen;
