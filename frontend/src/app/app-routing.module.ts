import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { SignupComponent } from "./components/signup/signup.component";
import { DepartmentComponent } from './components/department/department.component';
import { AuthGuard } from './services/auth-guard.service';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PostingPageComponent } from './components/posting-page/posting-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "home", component: HomeComponent },
  { path: 'dept/:id', component: DepartmentComponent },
  { path: 'create-profile', component: CreateProfileComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: "posting", component: PostingPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
