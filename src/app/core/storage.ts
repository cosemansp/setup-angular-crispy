export interface Options {
  noPrefix: boolean
}

export class Storage {
  private _prefix: string;
  private _storage: any;

  constructor(storage, prefix = '') {
    this._storage = storage;
    this._prefix = prefix;
  }

  set prefix(prefix: string) {
    this._prefix = prefix;
  }

  get prefix(): string {
    return this._prefix;
  }

  set(key: string, value:  any, options?: Options): void {
    const queryKey = this.getPrefixedKey(key, options);
    this._storage.setItem(queryKey, JSON.stringify(value));
  }

  get<T>(key: string, defaultValue?: T, options?: Options): T {
    const queryKey = this.getPrefixedKey(key, options);
    const value = JSON.parse(this._storage.getItem(queryKey));
    if (value === null) {
      return defaultValue;
    }

    return value;
  }

  rm(key: string) {
    const queryKey = this.getPrefixedKey(key);
    this._storage.removeItem(queryKey);
  }

  keys(): string[] {
    const keys = [];
    const allKeys = Object.keys(this._storage);
    if (this.prefix.length === 0) {
      return allKeys;
    }

    allKeys.forEach((key) => {
      if (key.indexOf(this.prefix) !== -1) {
        keys.push(key.replace(this.prefix, ''));
      }
    });

    return keys;
  }

  flush() {
    if (this.prefix.length) {
      this.keys().forEach((key) => {
        this._storage.removeItem(this.getPrefixedKey(key));
      });
      return;
    };

    this._storage.clear();
  };

  private getPrefixedKey(key, options?: Options) {
    options = options || <Options>{};
    if (options.noPrefix) {
      return key;
    }

    if (!this.prefix) {
      return key;
    }

    return `${this.prefix}.${key}`;
  }
}

export const local = new Storage(localStorage);
export const session = new Storage(sessionStorage);


