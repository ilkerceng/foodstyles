import React from 'react';
import {LangType, TranslationType} from '../types';

export const LocalizationContext = React.createContext<ILocalization>({});

export interface ILocalization {
  lang: (id: keyof LangType) => string;
  locale: TranslationType;
  setLocale: (id: TranslationType) => void;
}
