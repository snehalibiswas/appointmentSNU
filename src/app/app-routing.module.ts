import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { ProfessorCardComponent } from './professor-card/professor-card.component';
import { ProfessorListComponent } from './professor-list/professor-list.component';

const routes: Routes = [
  {path: 'dept', component: DepartmentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
