import React, {FC, type PropsWithChildren} from 'react';
import {View} from 'react-native-ui-lib';

const LoginButtonView: FC<PropsWithChildren<{}>> = props => {
  return (
    <>
      {React.Children.map(props.children, child => (
        <View marginB-15>{child}</View>
      ))}
    </>
  );
};

export default LoginButtonView;
