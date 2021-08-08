/* eslint-disable import/no-cycle */
/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { ModalActions } from "../../actions/generalActions/modalActions";

export interface IModalReducer {
  type: 'success' | 'error' | 'warning';
  isModalOpen?: boolean;
  message: string;
}

const initialState: IModalReducer = {
  type: 'success',
  isModalOpen: false,
  message: ''
};

function modalReducer(state = initialState, action: { type: ModalActions; payload: unknown; }) {
  switch (action.type) {
    case ModalActions.ADD_MODAL:
      const {type, message} = action.payload as unknown as IModalReducer;
      return { ...state, type, message, isModalOpen: true };
    case ModalActions.REMOVE_MODAL:
      return { ...state, isModalOpen: false };
    default:
      return state;
  }
}

export default modalReducer;
