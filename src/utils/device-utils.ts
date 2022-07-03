import {NativeModules, Platform} from 'react-native';
import {TranslationType} from '../types';

export const getDeviceLang = (): {
  lang: TranslationType;
  locationCode: string;
} => {
  const deviceLanguage: string =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
      : NativeModules.I18nManager.localeIdentifier;
  const splitCharacter = deviceLanguage.includes('-') ? '-' : '_';

  return {
    lang: (deviceLanguage.split(splitCharacter)[0] as TranslationType) || 'en',
    locationCode: deviceLanguage.split(splitCharacter)[1],
  };
};
