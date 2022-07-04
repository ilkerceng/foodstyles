import 'react-native-gesture-handler';
import './bootstrap';

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import AppNavigationContainer from './navigation/AppNavigationContainer';
import {LocalizationContext} from './context/LocalizationContext';
import {TranslationType} from './types';
import i18n, {Scope, TranslateOptions} from 'i18n-js';
import Apollo from './Apollo';

const App = () => {
  const [locale, setLocale] = React.useState<TranslationType>();

  const localizationContext = React.useMemo(
    () => ({
      lang: (scope: Scope, options: TranslateOptions) =>
        i18n.t(scope, {locale, ...options}),
      locale,
      setLocale,
    }),
    [locale],
  );

  return (
    <Apollo>
      <LocalizationContext.Provider value={localizationContext}>
        <SafeAreaProvider>
          <StatusBar
            backgroundColor={'transparent'}
            barStyle={'light-content'}
            showHideTransition={'none'}
            hidden={false}
            translucent
          />
          <AppNavigationContainer />
        </SafeAreaProvider>
      </LocalizationContext.Provider>
    </Apollo>
  );
};

export default App;
