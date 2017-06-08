import { setValue } from './helper'
import * as Logger from 'js-logger';

// The #{...} tag will be replace by Octopus Deploy
// When not specified there is a fallback to the default value
export const environment = {
  production: true,
  name: 'prod',

  // hot module reload (must be disable in production !)
  hmr: false,

  // loglevel
  logLevel: Logger.WARN,

  // root URL for application server
  apiUrlBase: setValue('#{apiUrlBase}', 'http://localhost:2000'),

  // request timeout
  requestTimeout: setValue('#{requestTimeout}', 2000),

  // request timeout
  mySwitch: setValue('#{mySwitch}', false)
};
