import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectorateService {

  inspectorate = [{
    code: 'WAW',
    name: 'Warszawa'
  }];

  constructor() { }

  public getCurrentInspectorate() {
    return from(this.inspectorate);
  }

}
