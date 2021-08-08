/* eslint-disable import/no-cycle */
/* eslint-disable no-else-return */
/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
import { isFSA } from 'flux-standard-action';
import { CustomerActions } from './actions/customerActions/customerInfoActions';
import { addLoader, removeLoader, deleteLoader  } from "./actions/generalActions/generalActions";
import { addModal  } from "./actions/generalActions/modalActions";

const isPromise = (val: any) => val && typeof val.then === 'function';

const showPopupActions = [
  CustomerActions.SIGN_UP,
  CustomerActions.DELETE_CUSTOMER_ADRESS,
  CustomerActions.CREATE_CUSTOMER_ADRESS,
  CustomerActions.UPDATE_CUSTOMER_ADRESS,
  CustomerActions.UPDATE_CUSTOMER_MAIL
] as string[]

export default ({ dispatch }: any) => (next: any) => async (action: any) => {
  if (!isFSA(action)) {
    if (isPromise(action)) {
      return dispatch(await action);
    }

    return next(action);
  }

  if (!isPromise(action.payload)) {
    return next(action);
  } else {
    dispatch(addLoader());
  }


  if (!action.payload) {
    return;
  }  try {
    const response: any = await action.payload;
    const data = await response.json();
    const isSuccess = response.status === 200;
    const modalType = isSuccess ? 'success' : 'error';
    dispatch(deleteLoader());

    if (showPopupActions.includes(action.type)){
      dispatch(addModal( { type: modalType, message: data.message || '' } ));
    }
    
    return dispatch({
      ...action,
      payload : { 
        ...data,
        isSuccess
      },
    });
  } catch(error) {
    dispatch(removeLoader());
    console.log(error);
  }
};