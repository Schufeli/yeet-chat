import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelPageComponent } from '../channel/channel-page/channel-page.component';
import { UserGuard } from '../shared/user.guard';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardPageComponent, canActivate: [UserGuard],
    children: [
      { path: 'channel', component: ChannelPageComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
