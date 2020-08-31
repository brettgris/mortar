import { applyPolyfills } from './dist/esm/polyfills/index';
import { defineCustomElements } from './dist/esm/loader';

applyPolyfills().then(() => {
    defineCustomElements();
});