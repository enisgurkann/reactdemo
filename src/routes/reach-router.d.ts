/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Attributes } from 'react';

declare module 'react' {
  interface Attributes {
    path?: string;
  }
}

declare module '@reach/router';
