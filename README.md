# Angular Reference App

THIS IS WORK IN PROGRESS

## Setup

- Initialy create with with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.0
- Core dependencies:
  - @Angular/cli:     1.1.0
  - @Angular:         ^4.0.0      // >= 4.0.0 < 5.0.0
  - codelyzer:        ~3.0.1      // >= 3.0.1 < 3.1.0
  - tslint:           ~5.3.2      // >= 5.3.2 < 5.4.0
  - typescript:       ~2.3.3      // >= 2.3.3 < 2.4.0
  - bootstrap-sass:   ^3.3.7      // >= 3.3.7 < 4.0.0
  - font-awesome:     ^4.7.0      // >= 4.7.0 < 5.0.0

## Prerequisites

- Node 6.9.0 or higher
- @angular/cli 1.1 or higher installed globally
- Yarn 0.24 or higher 

## Script Commands

| Command               	| Description                                       	|
|-----------------------	|---------------------------------------------------	|
| serve                 	| Open devServer & browser                          	|
| build                 	| Build bundle in development & default environment 	|
| build:prod            	| Build bundle in production & prod environment     	|
| build:prod:sourcemaps 	| Build bundle in production (with source maps)     	|
| test                  	| Run Jest test runner in watch                     	|
| test:ci               	| Run Jest test runner once                         	|
| lint                  	| Lint all source files                             	|
| cleanup               	| Remove all generated files & folders              	|
| explore               	| Open source map explorer to verify bundle sizes   	|

## Suggestions

For localstorage use one of the following components

- [Lockr](https://github.com/tsironis/lockr): Simple easy local storage wrapper
- [Lscache](https://github.com/pamelafox/lscache): Idem as Lockr but item can expire
- [ng2-webstorage](https://github.com/PillowPillow/ng2-webstorage): LocalStorage with decorators and Observables

For Internationalization

- [ngx-translate](http://www.ngx-translate.com/): The internationalization (i18n) library for Angular 2+

Logging

- [nightingale](https://github.com/nightingalejs/nightingale): Univeral Javscript logging like NLog

## Explorer bundle size

You can view any bundle that has a source map

```bash
$ yarn explore ./dist/main.bundle.js    # main bundle
$ yarn explore ./dist/vendor.bundle.js  # vendor (angular, lodash, etc...) bundle

# for production you need to run 'build:prod:sourcemaps'
$ yarn build:prod:sourcemaps
$ yarn explore ./dist-prod/vendor.a4a2c0133b0735557fcd.bundle.js
```

## Changed on @angular/cli defaults:

Removed following dependencies

- karma.*
- jasmine.*
- protractor

Added following dependencies

Utils

- rimraf

Unit Testing

- jest
- jest-preset-angular
- ngx-http-test
- pretty
- cheerio

Styling

- bootstrap-sass
- font-awesome

Components

- ng2-toastr

