import React from 'react';
import {
  ILocalization,
  LocalizationContext,
} from '../context/LocalizationContext';

const useIntl = (): Partial<ILocalization> => {
  const {lang, locale, setLocale} = React.useContext(
    LocalizationContext,
  ) as ILocalization;

  return {lang, locale, setLocale};
};

export default useIntl;
