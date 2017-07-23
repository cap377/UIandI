import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { ForumComponent } from './forum/forum.component';
import { UserProfilesComponent } from './user-profiles/user-profiles.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: {name: 'ACE'}},
  { path: 'forum', component: ForumComponent, data: {name: 'Forums'}},
  { path: 'users', component: UserProfilesComponent, data: {name: 'Personnel'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
