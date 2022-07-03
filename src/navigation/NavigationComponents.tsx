import {StyleSheet, Text, View} from 'react-native';
import React, {FC, PropsWithChildren} from 'react';
import {colors, spacings, typographies} from '../theme/initDesignSystem';
import {BackIcon} from '../assets/icons';
import {TouchableOpacity} from 'react-native-ui-lib';
import {useNavigation} from '@react-navigation/native';

export const CustomHeader: FC<PropsWithChildren<{}>> = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 41,
        marginHorizontal: spacings.s2,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {props.children}
    </View>
  );
};

export const HeaderTitle: FC<PropsWithChildren<{}>> = props => {
  return (
    <Text
      style={{
        ...typographies.TEXT_STYLE_5,
      }}
    >
      {props.children}
    </Text>
  );
};
export const HeaderBackButton: FC<PropsWithChildren> = props => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: 'white',
        height: 41,
        width: 41,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 21,
        shadowColor: colors.GREYISH_40,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowRadius: 7,
        shadowOpacity: 1,
      }}
    >
      <TouchableOpacity onPress={navigation.goBack}>
        <BackIcon width={20} height={20} fill={colors.BLACK} />
      </TouchableOpacity>
    </View>
  );
};
