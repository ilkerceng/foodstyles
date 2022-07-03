import React from 'react';
import {View, Text, Button, ButtonProps, Colors} from 'react-native-ui-lib';
import {SvgProps} from 'react-native-svg';
import {typographies, TypographyType} from '../../theme/initDesignSystem';

const LoginButton = ({
  onPress,
  label,
  labelVariant = 'TEXT_STYLE_2',
  Icon,
  ...props
}: ButtonProps & {
  Icon?: React.FC<SvgProps>;
  labelVariant?: TypographyType;
}) => {
  return (
    <Button
      paddingV-s3
      style={{width: 250}}
      backgroundColor={Colors.white}
      onPress={onPress}
      {...props}
    >
      <View row centerV>
        {Icon ? (
          <View marginR-s3>
            <Icon width={20} height={20} fill={Colors.black} />
          </View>
        ) : null}
        <Text style={typographies[labelVariant]} button>
          {label}
        </Text>
      </View>
    </Button>
  );
};

export default LoginButton;
