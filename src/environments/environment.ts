// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import { setValue } from './helper'
import * as Logger from 'js-logger';

export const environment = {
  production: false,
  name: 'dev',

  // hot module reload (enable for develop)
  hmr: true,

  // loglevel
  logLevel: Logger.DEBUG,

  // root URL for application server
  apiUrlBase: 'http://localhost:2000',

  // request timeout
  requestTimeout: 2000,

  // request timeout
  mySwitch: false,
};


