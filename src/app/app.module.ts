/* Angular */
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Modules */
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'ng2-toastr/ng2-toastr';

/* 3th Party dependencies */
import { APP_BASE_HREF } from '@angular/common';
import { ToastOptions } from 'ng2-toastr';
import * as Logger from 'js-logger';

/* Local dependencies */
import { environment } from 'environments/environment';
import { local, session } from './core/storage';
import eventAggregator from './services/eventAggregator';
import { CustomErrorHandler } from './services/errorHandler';

// Components
import { AppComponent } from './app.component';
import { SampleComponent } from './components/sample.component';

// Services
import { CustomHttp } from './services/customHttp';

export function createHttp(backend: XHRBackend, options: RequestOptions) {
  return new CustomHttp(backend, options);
}

@NgModule({
  declarations: [AppComponent, SampleComponent],
  imports: [BrowserModule, HttpModule, ReactiveFormsModule, ToastModule.forRoot()],
  providers: [
    // Custom http
    {
      provide: Http,
      useFactory: createHttp,
      deps: [XHRBackend, RequestOptions],
    },
    // Error handler for appInsights
    {
      provide: ErrorHandler,
      useClass: CustomErrorHandler,
    },
    // Dynamic base-href
    {
      provide: APP_BASE_HREF,
      useValue: '/' + (window.location.pathname.split('/')[1] || ''),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    // setup logging
    const consoleHandler = (<any>Logger).createDefaultHandler();
    Logger.useDefaults();
    Logger.setLevel(environment.logLevel);
    Logger.setHandler(function(messages, context) {
      consoleHandler(messages, context);
      // Add custom handlers here
    });
    const log = Logger.get('app');
    log.info('Started');
    log.info('Config', JSON.stringify(environment, null, '\t'));

    // setup localStorage prefix
    // setup localStorage prefix
    local.prefix = environment.appName;
    session.prefix = local.prefix;
  }
}
