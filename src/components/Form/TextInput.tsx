import React, {FC, ReactElement, useEffect, useRef, useState} from 'react';
import {
  TextInput as DefaultTextInput,
  TextInputProps,
  ViewStyle,
  TextStyle,
  TextInputFocusEventData,
  NativeSyntheticEvent,
} from 'react-native';
import {Colors, Text, TextProps, View} from 'react-native-ui-lib';
import {colors, spacings, typographies} from '../../theme/initDesignSystem';

export const ServerErrorFormMessage: FC<
  {message?: string} & TextProps
> = props => {
  return props.message ? (
    <View
      paddingV-s1
      paddingH-s2
      backgroundColor={colors.ORANGE_RED}
      center
      br30
    >
      <Text {...props} style={{...typographies.TEXT_STYLE}}>
        {props.message}
      </Text>
    </View>
  ) : null;
};

export const ErrorMessage: FC<{message?: string} & TextProps> = props => {
  return props.message ? (
    <Text {...props} style={{color: 'red'}}>
      {props.message}
    </Text>
  ) : null;
};

export type ITextInput = TextInputProps & {
  isFocused?: boolean;
  paddingR?: boolean;
  trailingAccessory?: ReactElement;
  leadingAccessory?: ReactElement;
  contentContainerStyle?: ViewStyle;
  label?: string;
  labelContainerStyle?: ViewStyle;
  labelTextStyle?: TextStyle;
  shouldFocus?: boolean;
};

const TextInput: FC<ITextInput> = ({
  paddingR,
  trailingAccessory,
  leadingAccessory,
  label,
  labelContainerStyle,
  labelTextStyle,
  editable = true,
  shouldFocus = false,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(props.isFocused);
  const inputRef = useRef();

  const onFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(true);
    props.onFocus?.(e);
  };

  const onBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);
    props.onBlur?.(e);
  };

  useEffect(() => {
    shouldFocus && inputRef.current && inputRef.current?.focus();
  }, [shouldFocus, inputRef.current]);

  return (
    <View>
      {label ? (
        <View
          style={{
            ...labelContainerStyle,
          }}
        >
          <Text
            style={{
              ...typographies.TEXT_STYLE,
              marginBottom: 7,
              ...labelTextStyle,
            }}
          >
            {label}
          </Text>
        </View>
      ) : null}
      <View
        row
        centerH
        style={{
          alignItems: 'center',
          paddingHorizontal: 12,
          // borderWidth: 1,
          backgroundColor: colors.WHITE,
          borderWidth: 0,
          borderRadius: 4,
          height: 40,
          borderColor: isFocused ? Colors.dark : Colors.light,
          ...props.contentContainerStyle,
        }}
      >
        {leadingAccessory ? (
          <View style={{justifyContent: 'center', marginTop: 2}}>
            {leadingAccessory}
          </View>
        ) : null}
        <View flex>
          {editable ? (
            <DefaultTextInput
              ref={inputRef}
              editable={editable}
              onFocus={onFocus}
              onBlur={onBlur}
              placeholderTextColor={Colors.gray}
              style={{
                flex: 1,
                marginLeft: leadingAccessory ? spacings.s3 : 0,
                marginRight: trailingAccessory ? spacings.s3 : 0,
                borderRadius: 8,
                fontSize: 16,
                lineHeight: 19,
              }}
              autoCapitalize={'none'}
              autoCorrect={false}
              {...props}
            />
          ) : (
            <View
              centerV
              style={{
                flex: 1,
                marginLeft: leadingAccessory ? spacings.s3 : 0,
                marginRight: trailingAccessory ? spacings.s3 : 0,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: Colors.gray,
                }}
              >
                {props.placeholder}
              </Text>
            </View>
          )}
        </View>
        {trailingAccessory ? (
          <View style={{justifyContent: 'center', marginTop: 2}}>
            {trailingAccessory}
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default TextInput;
