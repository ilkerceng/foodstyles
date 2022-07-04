import {StyleSheet} from 'react-native';
import React from 'react';
import {colors, typographies} from '../../../theme/initDesignSystem';
import TextInput, {
  ErrorMessage,
  ServerErrorFormMessage,
} from '../../../components/Form/TextInput';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Spacer from '../../../components/Spacer';
import {Button, View} from 'react-native-ui-lib';
import {Controller, useForm} from 'react-hook-form';
import {FloatingHeader} from '../../../navigation/NavigationComponents';
import {Route} from '@react-navigation/native';
import {Routes} from '../../../navigation/routesNames';
import {useSignUpWithEmail} from '../../../services/authentication.service';
import {useUserStore} from '../../../store/userStore';
import {DEFAULT_REQUIRED_MESSAGE} from '../../../config/constants';

type EmailSignUpType = {
  name: string;
  email: string;
  password: string;
};

const EmailSignUpScreen = ({route}: {route: Route<any>}) => {
  const {
    control,
    handleSubmit,
    setError,
    clearErrors,
    formState: {errors},
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      loginError: '',
    },
  });
  const [signUpWithEmail] = useSignUpWithEmail();
  const {setUser} = useUserStore();

  const onSubmit = ({name, email, password}: EmailSignUpType) => {
    signUpWithEmail({
      variables: {name, email, password},
      onError(err) {
        setError('loginError', {
          message: err?.message || '',
        });
      },
      onCompleted(data) {
        setUser(data.signUpWithEmail);
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
              name="name"
              control={control}
              rules={{
                required: {
                  message: DEFAULT_REQUIRED_MESSAGE,
                  value: true,
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  label="Your Name"
                  onBlur={onBlur}
                  onChangeText={text => {
                    onChange(text);
                    clearErrors('loginError');
                  }}
                  value={value}
                />
              )}
            />
            <ErrorMessage message={errors.name?.message} />
            <Controller
              name="email"
              control={control}
              rules={{
                required: {
                  message: DEFAULT_REQUIRED_MESSAGE,
                  value: true,
                },
              }}
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
              name="password"
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
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  label="Password (min 6 characters)"
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
                label="SIGN UP"
                backgroundColor={colors.AQUA_GREEN}
                labelStyle={{
                  ...typographies.TEXT_STYLE_5,
                  fontSize: 16,
                  letterSpacing: 1,
                }}
                style={{width: 150, height: 43}}
                onPress={handleSubmit(onSubmit)}
              />
            </View>
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

export default EmailSignUpScreen;
