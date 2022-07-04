import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React, {FC, PropsWithChildren} from 'react';
import {colors, spacings, typographies} from '../theme/initDesignSystem';
import {BackIcon} from '../assets/icons';
import {TouchableOpacity} from 'react-native-ui-lib';
import {useNavigation} from '@react-navigation/native';

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

export const FloatingHeader = ({
  headerContainerStyle = {},
  title,
  titleStyle,
  showBackButton = true,
}: {
  headerContainerStyle?: StyleProp<ViewStyle>;
  title: string;
  titleStyle?: StyleProp<TextStyle>;
  showBackButton?: boolean;
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 41,
        marginHorizontal: spacings.s2,
        alignItems: 'center',
        justifyContent: 'center',
        ...headerContainerStyle,
      }}
    >
      {showBackButton ? (
        <View style={{position: 'absolute', left: 0}}>
          <HeaderBackButton />
        </View>
      ) : null}
      <Text
        style={{
          ...typographies.TEXT_STYLE_5,
          ...titleStyle,
        }}
      >
        {title}{' '}
      </Text>
    </View>
  );
};
