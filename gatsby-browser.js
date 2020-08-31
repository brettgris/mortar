import React from 'react';
import App from './src/site/app';

export const wrapPageElement = ({ element, props }) => {
  return <App {...props}>{element}</App>;
};