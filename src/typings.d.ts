/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

// allows "require('myLib')" in typescript
declare var require: any;
