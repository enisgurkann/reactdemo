/* eslint-disable import/no-cycle */
/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { GeneralActions } from "../../actions/generalActions/generalActions";

export interface ILoaderReducer {
  loaderCount: number;
}

const initialState: ILoaderReducer = {
  loaderCount: 0
};

function loaderReducer(state = initialState, action: { type: GeneralActions; payload: unknown; }) {
  switch (action.type) {
    case GeneralActions.ADD_LOADER:
      const count = state.loaderCount + 1;
      return { ...state, loaderCount: count };
    case GeneralActions.DELETE_LOADER:
      const loaderCount = state.loaderCount - 1;
      return { ...state, loaderCount };
    case GeneralActions.REMOVE_LOADER:
      return { ...state, loaderCount: 0 };
    default:
      return state;
  }
}

export default loaderReducer;
