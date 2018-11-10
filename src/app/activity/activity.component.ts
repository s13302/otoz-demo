import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ActivityService } from '../service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  activity;
  newParticipant = {
    name: '',
    surname: '',
    email: ''
  };
  addUserFormVisible = false;

  constructor(
    private route: ActivatedRoute,
    private _activityService: ActivityService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => this._activityService.getActivity(params.id).subscribe(
        data => this.activity = data
      )
    );
  }

  addUserToActivity() {
    this.activity.participants.push(this.newParticipant);
    this.newParticipant = {
      name: '',
      surname: '',
      email: ''
    };
    this.addUserFormVisible = false;
  }

  removeUserFromActivity(user) {
    const index = this.activity.participants.indexOf(user);
    if (index > -1) {
      this.activity.participants.splice(index, 1);
    }
  }

}
