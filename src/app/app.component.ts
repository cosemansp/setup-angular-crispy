
import { ToastsManager } from 'ng2-toastr/ng2-toastr'
import { EventAggregator } from './services/eventAggregator';
import { Component, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = 'App Works';

  constructor(private toastr: ToastsManager,
    private eventAggregator: EventAggregator,
    vcr: ViewContainerRef) {

    // setup toaster
    toastr.setRootViewContainerRef(vcr)
    eventAggregator.listen('ERROR')
      .subscribe((error) => {
        console.error(error)
        toastr.error(error, 'Oops')
      })
  }
}

