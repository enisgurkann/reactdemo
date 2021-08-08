/* eslint-disable import/no-cycle */
/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { DeviceActions } from "../../actions/deviceActions/deviceActions";

export interface IDeviceReducer {
  isSmallScreen: boolean;
  isLargeScreen: boolean;
}

const initialState = {
  isLargeScreen: true,
  isSmallScreen: false
} as IDeviceReducer

function deviceReducer(state = initialState, action: { type: DeviceActions; payload: unknown; }) {
  switch (action.type) {
    case DeviceActions.SET_DEVICE_DESKTOP:
      return { isLargeScreen: true, isSmallScreen: false }
    case DeviceActions.SET_DEVICE_MOBILE:
      return { isLargeScreen: false, isSmallScreen: true }
    default:
      return state;
  }
}

export default deviceReducer;
