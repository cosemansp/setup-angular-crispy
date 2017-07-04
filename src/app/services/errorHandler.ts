import { Injectable, ErrorHandler } from '@angular/core';

@Injectable()
export class CustomErrorHandler extends ErrorHandler {
  constructor() {
    super(true);
  }

  handleError(error: any) {
    //
    // add custom error handling here
    //

    // delegate to the default handler
    super.handleError(error);
  }
}
