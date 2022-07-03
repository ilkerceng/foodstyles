import {TextStyle} from 'react-native';
import {Colors, Typography, Spacings} from 'react-native-ui-lib';

export const colors = {
  GREYISH_BROWN_30: 'rgba(111, 93, 80, 0.3)',
  SECONDARY_BUTTON_BACKGROUND: '#ececec',
  GREYISH_BROWN_30_20: 'rgba(111, 93, 80, 0.2)',
  GREYISH_BROWN: '#434343',
  BACKGROUND_GRAY: '#434343',
  AQUA_GREEN: 'rgb(17, 206, 144)',
  TOMATO: '#434343',
  WHITE_TWO: '#434343',
  WHITE_80: 'rgba(242, 242, 242, 0.8)',
  BLACK: '#000000',
  ORANGE_RED: '#ff3b30',
  BRIGHT_BLUE: '#007aff',
  EGGPLANT_40: 'rgba(4, 4, 15, 0.4)',
  GREYISH_40: 'rgba(176, 176, 176, 0.4)',
  WHITE: '#ffffff',
  MAIZE: '#f3c442',
  ORANGISH: '#fa7745',
  GREEN_TEAL: '#11b777',
};

export type TypographyType =
  | 'TEXT_STYLE'
  | 'TEXT_STYLE_2'
  | 'TEXT_STYLE_3'
  | 'TEXT_STYLE_4'
  | 'TEXT_STYLE_5'
  | 'TEXT_STYLE_6'
  | 'TEXT_STYLE_7';

export const typographies: Record<TypographyType, TextStyle> = {
  TEXT_STYLE: {
    fontFamily: 'ProximaNovaAlt-Semibold',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0,
    color: colors.WHITE,
  },
  TEXT_STYLE_2: {
    fontFamily: 'ProximaNovaAlt-Semibold',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 18,
    letterSpacing: 0,
    color: colors.GREYISH_BROWN,
  },
  TEXT_STYLE_3: {
    fontFamily: 'ProximaNovaAlt-Regular',
    fontSize: 18,
    fontWeight: 'normal',
    lineHeight: 22,
    letterSpacing: 0,
    color: colors.WHITE,
  },
  TEXT_STYLE_4: {
    fontFamily: 'ProximaNovaAlt-Semibold',
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0,
    color: colors.WHITE,
  },
  TEXT_STYLE_5: {
    fontFamily: 'ProximaNovaAlt-Bold',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 22,
    letterSpacing: 0,
    color: colors.WHITE,
  },
  TEXT_STYLE_6: {
    fontFamily: 'ProximaNovaAlt-Bold',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 22,
    letterSpacing: 0,
    color: colors.GREYISH_BROWN,
  },
  TEXT_STYLE_7: {
    fontFamily: 'ProximaNovaAlt-Bold',
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 0,
    color: colors.GREYISH_BROWN,
  },
};

export const spacings: Record<string, number> = {
  s1: 4,
  s2: 8,
  s3: 12,
};

Colors.loadColors(colors);
Typography.loadTypographies(typographies);
Spacings.loadSpacings(spacings);
