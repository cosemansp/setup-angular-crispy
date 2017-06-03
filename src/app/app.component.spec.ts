import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ToastsManager } from 'ng2-toastr/ng2-toastr'
import { EventAggregator } from './services/eventAggregator'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        EventAggregator,
        // dummy ToastManager
        {
          provide: ToastsManager, useFactory: () => {
            return { setRootViewContainerRef() {} };
          },
        }
      ]
    }).compileComponents();
  }));

  it('should compile successfully', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(fixture).toMatchSnapshot();
  });
});
