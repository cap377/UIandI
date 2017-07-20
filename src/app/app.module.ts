import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ForumComponent } from './forum/forum.component';
import { UserProfilesComponent } from './user-profiles/user-profiles.component';

@NgModule({
  declarations: [
    AppComponent,
    ForumComponent,
    UserProfilesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
