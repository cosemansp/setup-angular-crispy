import { setValue } from './octopusHelper';
import { environment as defaultEnvironment } from './environment';
import * as Logger from 'js-logger';

// The #{...} tag will be replace by Octopus Deploy
// When not specified there is a fallback to the default value
export const environment = {
  // use all setting from default environment
  ...defaultEnvironment,

  //
  // overwrite settings here
  //
  production: true,
  name: 'prod',

  // hot module reload (must be disable in production !)
  hmr: false,

  // loglevel
  logLevel: Logger.WARN,

  //
  // Following settings are overwritten by octopusDeploy config replacement
  //

  // root URL for application server
  apiUrlBase: setValue('#{apiUrlBase}', 'http://localhost:2000'),

  // request timeout
  // requestTimeout: setValue('#{requestTimeout}', 2000),

  // request timeout
  // mySwitch: setValue('#{mySwitch}', false)
};
