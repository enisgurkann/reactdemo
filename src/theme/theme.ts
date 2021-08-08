import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorTypes;
  }
}

type ColorTypes = {
  primaryExtraLight: string;
  primaryLight: string;
  primary: string;
  primaryDark: string;
  primaryExtraDark: string;
  borderColor: string;
  borderGray: string;
  white: string;
  primaryNavy: string;
  primaryBlue: string;
  primartBlueLight: string;
  error: string;
  errorLight: string;
  letter: string;
  tableHeader: string;
  warmGray: string;
  primaryGreen: string;
  lightGray: string;
  lightGray2: string;
  darkGray: string;
  thinGray: string;
  darkGray2: string;
  darkGray3: string;
  light2: string;
  black: string;
  orange: string;
  red: string;
  warning: string;
  gray: string;
  darkCyan: string;
  darkGray4: string;
  light: string;
  gray89: string;
};
export const theme: DefaultTheme = {
  colors: {
    primaryExtraLight: '#D5F0E3',
    primaryLight: '#AAE2C7',
    primary: '#80D3AB',
    primaryDark: '#55C58F',
    primaryExtraDark: '#2BB673',
    borderColor: '#7F7F7F',
    borderGray: '#d8d8d8',
    white: '#FFFFFF',
    primaryNavy: '#334b5d',
    primaryBlue: '#2470b8',
    primartBlueLight: '#D3E2F1',
    error: '#DE2102',
    errorLight: '#F8D3CC',
    letter: '#7F7F7F',
    tableHeader: '#98a7b2',
    warmGray: '#f6f7f8',
    primaryGreen: '#2bb673',
    lightGray: '#fafdff',
    lightGray2: '#d4d4d4',
    darkGray: '#e3eef7',
    thinGray: '#545454',
    darkGray2: '#545454',
    darkGray3: '#292929',
    light2: '#adb7be',
    black: '#000000',
    orange: '#ff7122',
    red: '#e72b2b',
    warning: '#fff1e9',
    gray: '#e5e5e5',
    darkCyan: '#00a950',
    darkGray4: '#a9a9a9',
    light: '#d6dbdf',
    gray89: '#e3e3e3',
  },
};
