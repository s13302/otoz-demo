import { Component, OnInit } from '@angular/core';

import { ActivityService } from '../service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  futureActivities;

  constructor(
    private _activityService: ActivityService
  ) { }

  ngOnInit() {
    this._activityService.getFutureActivities().subscribe(
      data => this.futureActivities = data
    );
  }

}
