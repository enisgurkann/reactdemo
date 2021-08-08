/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-explicit-any */

import config from "../../config";
import { store } from "../../store/Store";

interface IServiceOptions {
  method: 'POST' | 'GET' | 'PUT' | 'DELETE';
  credentials?: 'omit' | 'same-origin';
  headers?: any;
  data?: any;
}
const serviceCall = (path: string, options: IServiceOptions) => {
  const baseUrl = config.server.URL;
  const url = baseUrl + path;
  const { token } = store.getState().customer.info
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': store.getState() ? `Bearer ${token}` : '',
    ...options.headers,
  };
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: options.method, // *GET, POST, PUT, DELETE, etc.
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'omit' || options.credentials,
      headers,
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(options.data),
    })
      .then(async (response) => resolve(response))
      .catch((e) => reject(e));
  });
};

export default serviceCall;