import i18n from 'i18n-js';
import {LangType, TranslationType} from '../types';
import en_US from '../en_US';
import tr_TR from './locales/tr_TR';

const translations: Record<TranslationType, LangType> = {
  en: en_US,
  tr: tr_TR,
};
i18n.translations = translations;
i18n.defaultSeparator = '#';
i18n.defaultLocale = 'tr';
i18n.locale = 'tr';
// i18n.fallbacks = true;
