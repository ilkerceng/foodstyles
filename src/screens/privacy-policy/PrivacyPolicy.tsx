import React from 'react';

import {Text, TouchableOpacity, View} from 'react-native-ui-lib';
import useIntl from '../../hooks/useIntl';

const PrivacyPolicy = () => {
  const {lang} = useIntl();

  return (
    <View row centerV style={{width: 300}}>
      <TouchableOpacity
        // activeOpacity={0.5}
        onPress={() => {
          // setShowModal(true);
        }}
      >
        <Text TEXT_STYLE_4 center description marginR-s1>
          {lang('privacyPolicyButtonText')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrivacyPolicy;
