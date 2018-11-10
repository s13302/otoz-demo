import { Component, OnInit } from '@angular/core';
import { InspectorateService } from '../../service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  inspectorate;

  constructor(
    private _inspectorateService: InspectorateService
  ) { }

  ngOnInit() {
    this._inspectorateService.getCurrentInspectorate().subscribe(
      data => this.inspectorate = data
    );
  }

}
