import 'jest-preset-angular';
import 'jasmine-expect';  // additional jasmine machters
import { componentFixtureSerializer } from './test/jest/componentFixtureSerizalizer'

// mock local & session storage
const mock = () => {
  let storage = {};
  return {
    getItem: key => key in storage ? storage[key] : null,
    setItem: (key, value) => storage[key] = value || '',
    removeItem: key => delete storage[key],
    clear: () => storage = {},
  };
};

Object.defineProperty(window, 'localStorage', {value: mock()});
Object.defineProperty(window, 'sessionStorage', {value: mock()});
Object.defineProperty(window, 'getComputedStyle', {
  value: () => ['-webkit-appearance']
});

// add custom component serializer for snapshots
expect.addSnapshotSerializer(componentFixtureSerializer);

