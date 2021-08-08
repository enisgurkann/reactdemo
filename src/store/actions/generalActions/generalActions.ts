/* eslint-disable no-octal */
/* eslint-disable import/no-cycle */

export enum GeneralActions {
  ADD_LOADER = '@@general/ADD_LOADER',
  DELETE_LOADER = '@@general/DELETE_LOADER',
  REMOVE_LOADER = '@@general/REMOVE_LOADER'
}


export const addLoader = () => ({
  type: GeneralActions.ADD_LOADER,
});

export const deleteLoader = () => ({
  type: GeneralActions.DELETE_LOADER,
});

export const removeLoader = () => ({
  type: GeneralActions.REMOVE_LOADER,
});
