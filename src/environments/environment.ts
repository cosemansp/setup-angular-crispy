// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import { setValue } from './helper'

export const environment = {
  production: false,

  // hot module reload (enable for develop)
  hmr: true,

  // root URL for application server
  apiUrlBase: 'http://localhost:2000',

  // request timeout
  requestTimeout: 2000,

  // request timeout
  mySwitch: false
};


