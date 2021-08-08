/* eslint-disable no-octal */
/* eslint-disable import/no-cycle */

export enum ModalActions {
  ADD_MODAL = '@@modal/ADD_MODAL',
  REMOVE_MODAL = '@@modal/REMOVE_MODAL'
}

export interface IAddModel {
  type: 'success' | 'error' | 'warning';
  message: string;
}

export const addModal = (data: IAddModel) => ({
  type: ModalActions.ADD_MODAL,
  payload: data
});

export const removeModal = () => ({
  type: ModalActions.REMOVE_MODAL,
});
