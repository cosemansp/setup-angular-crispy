import 'jest-preset-angular';
import { componentFixtureSerializer } from './test/jest/componentFixtureSerizalizer'

// additional matchers
// jasmine-object-matchers-jest

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

expect.addSnapshotSerializer(componentFixtureSerializer);

