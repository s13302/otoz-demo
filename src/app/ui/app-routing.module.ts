import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { CasesComponent } from '../cases/cases.component';
import { ActivityComponent } from '../activity/activity.component';

const routes: Routes = [{
  path: '',
  component: DashboardComponent
}, {
  path: 'cases',
  component: CasesComponent
}, {
  path: 'activity/:id',
  component: ActivityComponent
}, {
  path: '**',
  redirectTo: '/'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
