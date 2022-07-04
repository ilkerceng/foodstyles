import React, {FC, type PropsWithChildren} from 'react';
import {View} from 'react-native-ui-lib';

const Spacer: FC<PropsWithChildren<{space: number}>> = ({space, children}) => {
  return (
    <>
      {React.Children.map(children, child => (
        <View style={{marginBottom: space}}>{child}</View>
      ))}
    </>
  );
};

export default Spacer;
