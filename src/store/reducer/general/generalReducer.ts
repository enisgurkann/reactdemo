/* eslint-disable import/no-cycle */
/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { combineReducers } from 'redux';
import loaderReducer, { ILoaderReducer } from "./loaderReducer";
import modalReducer, { IModalReducer } from "./modalReducer";

export interface IGeneralReducer {
  loader: ILoaderReducer;
  modal: IModalReducer;
}

const generalReducer = combineReducers({
  modal: modalReducer,
  loader: loaderReducer,
});

export default generalReducer;
