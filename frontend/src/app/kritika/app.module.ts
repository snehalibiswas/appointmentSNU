import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { DropdownProfileComponent } from './dropdown-profile/dropdown-profile.component';
import { TimetableComponent } from './timetable/timetable.component';

console.log("module"); 

@NgModule({
  declarations: [
    AppComponent,
    ProfilePageComponent,
    DropdownProfileComponent,
    TimetableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
