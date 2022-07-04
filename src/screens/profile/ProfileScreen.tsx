import {StyleSheet} from 'react-native';
import React from 'react';
import {colors, typographies} from '../../theme/initDesignSystem';
import TextInput, {
  ErrorMessage,
  ServerErrorFormMessage,
} from '../../components/Form/TextInput';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, View} from 'react-native-ui-lib';
import {Controller, useForm} from 'react-hook-form';
import {FloatingHeader} from '../../navigation/NavigationComponents';
import {Route} from '@react-navigation/native';
import {Routes} from '../../navigation/routesNames';
import {useUserStore} from '../../store/userStore';
import Spacer from '../../components/Spacer';
import {DEFAULT_REQUIRED_MESSAGE} from '../../config/constants';

type ProfileInfoType = {
  name: string;
  email: string;
};

const ProfileScreen = ({route}: {route: Route<any>}) => {
  const {setUser, user} = useUserStore();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      name: user?.user.name,
      email: user?.user.email,
      profileUpdateError: '',
    },
  });

  const onSubmit = ({name = '', email = ''}: ProfileInfoType) => {
    //TODO: updating the name and email is missing on API
    setUser({...user, user: {...user?.user, name, email}});
  };

  return (
    <SafeAreaView edges={['top']} style={{...styles.container}}>
      <View>
        <FloatingHeader
          showBackButton={false}
          title={Routes[route.name]}
          titleStyle={{color: colors.BLACK}}
          headerContainerStyle={{justifyContent: 'flex-start'}}
        />
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
                  label="Name shown on your shared cards"
                  onBlur={onBlur}
                  onChangeText={text => {
                    onChange(text);
                  }}
                  value={value}
                  labelTextStyle={styles.inputLabel}
                  contentContainerStyle={styles.inputContentContainer}
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
                  }}
                  value={value}
                  labelTextStyle={styles.inputLabel}
                  contentContainerStyle={styles.inputContentContainer}
                />
              )}
            />
            <ErrorMessage message={errors.email?.message} />
            <ServerErrorFormMessage
              message={errors.profileUpdateError?.message}
            />
          </Spacer>
        </View>
      </View>
      <View height={140} style={{justifyContent: 'space-between'}}>
        <View center>
          <Button
            label="LOG OUT"
            outline
            color={colors.GREYISH_BROWN}
            labelStyle={{
              fontSize: 13,
              fontFamily: 'ProximaNovaAlt-Bold',
              lineHeight: 14,
              letterSpacing: 0.5,
              textAlign: 'center',
            }}
            style={{
              width: 162,
              paddingVertical: 15,
              borderStyle: 'solid',
              borderColor: '#d9d9d9',
            }}
            onPress={() => {
              setUser(null);
            }}
          />
        </View>
        <View
          center
          style={{
            width: '100%',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.53,
            shadowRadius: 13.97,
            elevation: 21,
            backgroundColor: 'white',
          }}
        >
          <View
            center
            style={{
              // position: 'absolute',
              bottom: 12,
              width: '100%',
              zIndex: 1,
            }}
          >
            <Button
              label="DONE"
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
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    justifyContent: 'space-between',
  },
  contentContainer: {
    paddingHorizontal: 38,
    marginTop: 18,
  },
  inputContentContainer: {
    backgroundColor: colors.SECONDARY_BUTTON_BACKGROUND,
  },
  inputLabel: {
    color: colors.GREYISH_BROWN,
  },
});

export default ProfileScreen;
