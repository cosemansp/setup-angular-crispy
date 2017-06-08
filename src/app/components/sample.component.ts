import { Component, Input, OnInit } from '@angular/core';
import * as Logger from 'js-logger';

const log = Logger.get('sampleComponent');
@Component({
  selector: 'sample',
  template: `
    <h1>Sample Component</h1>
    Id: {{user?.id}}
    Name: {{user?.name}}
  `,
})
export class SampleComponent implements OnInit {
  @Input() user;

  constructor() {
  }

  ngOnInit() {

  }
}

