import { setValue } from './helper'

// The #{...} tag will be replace by Octopus Deploy
// When not specified there is a fallback to the default value
export const environment = {
  production: true,

  // hot module reload (must be disable in production !)
  hmr: false,

  // root URL for application server
  apiUrlBase: setValue('#{apiUrlBase}', 'http://localhost:2000'),

  // request timeout
  requestTimeout: setValue('#{requestTimeout}', 2000),

  // request timeout
  mySwitch: setValue('#{mySwitch}', false)
};
