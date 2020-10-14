import { Config } from '@stencil/core';
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'mortar',
  taskQueue: 'async',
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: '@costar/apts-web-components',
      directivesProxyFile: 'dist/angular/directives/proxies.ts',
      valueAccessorConfigs: ValueAccessorConfig,
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    { 
      type: 'docs-readme',
      footer: '',
    }
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
