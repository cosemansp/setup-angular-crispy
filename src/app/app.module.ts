import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { ToastOptions } from 'ng2-toastr';
import * as Logger from 'js-logger';

import { environment } from 'environments/environment';
import { local } from './core/storage';

// components
import { AppComponent } from './app.component';
import { SampleComponent } from './components/sample.component';

// services
import { CustomHttp } from './services/customHttp';

// core services
import eventAggregator from './services/eventAggregator';

export function createHttp(backend: XHRBackend, options: RequestOptions) {
  return new CustomHttp(backend, options);
}

@NgModule({
  declarations: [AppComponent, SampleComponent],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    ToastModule.forRoot(),
  ],
  providers: [
    {
      provide: Http,
      useFactory: createHttp,
      deps: [XHRBackend, RequestOptions],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    // setup logging
    Logger.useDefaults();
    Logger.setLevel(environment.logLevel);
    const log = Logger.get('app');
    log.info('Started');
    log.info('Config', JSON.stringify(environment, null, '\t'));

    // setup localStorage prefix
    local.prefix = 'myApp';
  }
}
