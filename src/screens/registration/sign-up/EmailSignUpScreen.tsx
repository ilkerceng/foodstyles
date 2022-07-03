import {StyleSheet} from 'react-native';
import React from 'react';
import {colors, typographies} from '../../../theme/initDesignSystem';
import TextInput, {
  ErrorMessage,
  ServerErrorFormMessage,
} from '../../../components/Form/TextInput';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Spacer from '../Spacer';
import {Button, Text, View} from 'react-native-ui-lib';
import {Controller, useForm} from 'react-hook-form';
import {
  CustomHeader,
  HeaderBackButton,
  HeaderTitle,
} from '../../../navigation/NavigationComponents';
import {Route, useNavigation} from '@react-navigation/native';
import {Routes} from '../../../navigation/routesNames';

type EmailSignUpType = {
  name: string;
  email: string;
  password: string;
};

const DEFAULT_REQUIRED_MESSAGE = 'Required';

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
  const onSubmit = (data: EmailSignUpType) => {
    console.log(data);
    if (data.name === 'asd') {
      setError('loginError', {
        message: 'Email or password is not correct',
        type: 'value',
      });
    }
  };

  return (
    <LinearGradient
      colors={[colors.MAIZE, colors.ORANGISH]}
      style={styles.linearGradient}
    >
      <SafeAreaView edges={['top']} style={{...styles.container}}>
        <CustomHeader>
          <View style={{position: 'absolute', left: 0}}>
            <HeaderBackButton />
          </View>
          <HeaderTitle>{Routes['EmailSignUp']}</HeaderTitle>
        </CustomHeader>
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
              name="name"
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
