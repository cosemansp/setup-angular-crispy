import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms'

import { ToastModule } from 'ng2-toastr/ng2-toastr'
import { ToastOptions } from 'ng2-toastr'

import { AppComponent } from './app.component';
import { EventAggregator } from './services/eventAggregator';
import { CustomHttp } from './services/customHttp'

export function createHttp(backend: XHRBackend, options: RequestOptions, eventAggregator: EventAggregator) {
    return new CustomHttp(backend, options, eventAggregator);
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
    EventAggregator,
    {
        provide: Http,
        useFactory: createHttp,
        deps: [XHRBackend, RequestOptions, EventAggregator],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

