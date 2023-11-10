import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DepartmentComponent } from './department/department.component';
import { ProfessorCardComponent } from './professor-card/professor-card.component';
import { ProfessorListComponent } from './professor-list/professor-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    ProfessorCardComponent,
    ProfessorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
