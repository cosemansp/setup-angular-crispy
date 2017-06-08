import 'jest-preset-angular';
import 'jasmine-expect';  // additional jasmine machters
import { componentFixtureSerializer } from './test/jest/componentFixtureSerizalizer'

// mock local & session storage
const mock = () => {
  const base = Object.create(null);
  base.getItem = function(key) {
    return (key in this ? this[key] : null);
  }
  base.setItem = function(key, value)  {
    this[key] = value || '';
  }
  base.removeItem = function(key) {
    delete this[key];
  }
  base.key = function(index) {
    const keys = Object.keys(this);
    return keys[index] || null;
  }
  base.clear = function() {
    const keys = Object.keys(this);
    keys.forEach(key => {
      this.removeItem(key);
    })
  }
  Object.defineProperty(base, 'length', {
    get: function() {
      return Object.keys(this).length;
    }
  })
  return Object.create(base);
}

Object.defineProperty(window, 'localStorage', {value: mock()});
Object.defineProperty(window, 'sessionStorage', {value: mock()});
Object.defineProperty(window, 'getComputedStyle', {
  value: () => ['-webkit-appearance']
});

// limit stacktrace for simpler error dumps
Error.stackTraceLimit = 2;

// add custom component serializer for snapshots
expect.addSnapshotSerializer(componentFixtureSerializer);

