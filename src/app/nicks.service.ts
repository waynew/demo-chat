import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class NicksService {

  constructor() { }

  // TODO: this will be probably the usermodel or something
  getNicks(): Observable<String[]> {
      return of(
          [
              '@john.smith',
              '@john.smyth',
              '@johnny.boy',
              '@johnson.smith'
          ]
      );
  }

}
