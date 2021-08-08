/* eslint-disable no-octal */
/* eslint-disable import/no-cycle */

export enum DeviceActions {
  SET_DEVICE_MOBILE = '@@DEVICE/SET_DEVICE_MOBILE',
  SET_DEVICE_DESKTOP = '@@DEVICE/SET_DEVICE_DESKTOP'
}

export const setDeviceMobile = () => ({
  type: DeviceActions.SET_DEVICE_MOBILE,
});

export const setDeviceDesktop = () => ({
  type: DeviceActions.SET_DEVICE_DESKTOP,
})
