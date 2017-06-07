import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms'

import { ToastModule } from 'ng2-toastr/ng2-toastr'
import { ToastOptions } from 'ng2-toastr'

import { AppComponent } from './app.component';
import { CustomHttp } from './services/customHttp'

import eventAggregator from './services/eventAggregator';

export function createHttp(backend: XHRBackend, options: RequestOptions) {
    return new CustomHttp(backend, options);
};

@NgModule({
  declarations: [
    AppComponent,
  ],
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
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

