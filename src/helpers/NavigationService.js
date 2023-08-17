import { createRef } from 'react';

export const navigationRef = createRef();

export function navigate(screenName, params) {
  navigationRef.current?.navigate(screenName, params);
}