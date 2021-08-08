/* eslint-disable  @typescript-eslint/no-explicit-any */

type DeviceTypes = {
  mobileS: string;
  mobileM: string;
  mobileL: string;
  tablet: string;
  laptop: string;
  laptopM: string;
  laptopL: string;
  desktop: string;
  smallScreen: string;
};

const size: DeviceTypes = {
  mobileS: '321px',
  mobileM: '376px',
  mobileL: '426px',
  tablet: '1023px',
  laptop: '1025px',
  laptopM: '1367px',
  laptopL: '1441px',
  desktop: '2561px',
  smallScreen: '1024px',
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopM: `(max-width: ${size.laptopM})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
  smallScreen: `(max-width: ${size.smallScreen})`,
};

const BREAKPOINT = 1024;

const mediaQuery = window?.matchMedia ? window.matchMedia(`(max-width: ${BREAKPOINT}px)`) : null;

export const isSmallScreen = () => mediaQuery?.matches;
export const isLargeScreen = () => !isSmallScreen();
