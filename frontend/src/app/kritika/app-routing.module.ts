// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { 
  
// }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from './profile-page/profile-page.component'; 
import { DropdownProfileComponent } from './dropdown-profile/dropdown-profile.component';

console.log("routing");

const routes: Routes = [
  // Add other routes as needed
  { path: 'profile', component: ProfilePageComponent },
  { path: 'dropdown-profile', component: DropdownProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
