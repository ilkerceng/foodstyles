import React from 'react';
import {Spacings, Text as RNText, View} from 'react-native-ui-lib';

const ThemeScreen = () => {
  return (
    <View style={{backgroundColor: '#999', alignItems: 'center'}}>
      <RNText TEXT_STYLE>RN Text</RNText>
      <RNText TEXT_STYLE_1>RN Text</RNText>
      <RNText TEXT_STYLE_2>RN Text</RNText>
      <RNText TEXT_STYLE_3>RN Text</RNText>
      <RNText TEXT_STYLE_4>RN Text</RNText>
      <RNText TEXT_STYLE_5>RN Text</RNText>
      <RNText TEXT_STYLE_6>RN Text</RNText>
      <RNText TEXT_STYLE_7>RN Text</RNText>
      <View style={{height: 20}} />
      <View
        width={Spacings.s1}
        height={Spacings.s1}
        style={{backgroundColor: 'black'}}
      />
      <View style={{height: 5}} />
      <View
        width={Spacings.s2}
        height={Spacings.s2}
        style={{backgroundColor: 'black'}}
      />
      <View style={{height: 5}} />
      <View
        width={Spacings.s3}
        height={Spacings.s3}
        style={{backgroundColor: 'black'}}
      />
    </View>
  );
};

export default ThemeScreen;
