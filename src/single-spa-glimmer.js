const defaultOpts = {
  renderComponent: null,
  App: null,
  element: null, 
}

export default function singleSpaGlimmer(userOpts) {
  if (typeof userOpts !== 'object') {
    throw new Error(`single-spa-glimmer requires a configuration object`);
  }

  const opts = {
    ...defaultOpts,
    ...userOpts,
  };

  if (!opts.App) {
    throw new Error(`single-spa-glimmer must be passed opts.App`);
  }

  if (opts.renderComponent && typeof opts.renderComponent !== 'function') {
    throw new Error(`single-spa-glimmer: renderComponent must be a function `);
  }

  return {
    bootstrap: bootstrap.bind(null, opts),
    mount: mount.bind(null, opts),
    unmount: unmount.bind(null, opts),
  };
}

function bootstrap(opts) {
  return Promise.resolve();
}

function mount(opts) {
  return Promise
    .resolve()
  .then(() => {
    globalThis[Symbol.for('GLIMMER_VALIDATOR_REGISTRATION')] = false;
    const { renderComponent, App, element } = opts;
    element.innerHTML = '';
    renderComponent(App, element);
    });
}

function unmount(opts) {
  return Promise
    .resolve()
    .then(() => {
      return true;
    })
}
