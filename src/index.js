import { renderComponent } from '@glimmer/core';
import App from './App.js';
import LocaleService from './services/LocaleService.js';
import singleSpaGlimmer from './single-spa-glimmer.js';

/*
document.addEventListener(
  'DOMContentLoaded',
  () => {
    const element = document.getElementById('app');
    renderComponent(App, {
      element: element,
      owner: {
        services: {
          locale: new LocaleService('en_US'),
        },
      },
    });
  },
  { once: true }
);
*/

export default App;

const element = document.getElementById('navbar');
const glimmerLifecycles = singleSpaGlimmer({
  App,
  renderComponent,
  element,
});

export const bootstrap = glimmerLifecycles.bootstrap;
export const mount = glimmerLifecycles.mount;
export const unmount = glimmerLifecycles.unmount;


