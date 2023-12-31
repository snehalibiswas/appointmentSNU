import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSelectModule } from '@angular/material/select';

import { NavigationComponent } from "./components/navigation/navigation.component";
import { SignupComponent } from "./components/signup/signup.component";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
// import { PostsComponent } from "./components/posts/posts.component";
// import { CreatePostComponent } from "./components/create-post/create-post.component";

import { DropDownListModule, ComboBoxModule, AutoCompleteModule, MultiSelectModule, ListBoxModule, DropDownTreeModule, MentionModule } from '@syncfusion/ej2-angular-dropdowns';
import { FormsModule }   from '@angular/forms';
import { AuthInterceptorService } from "./services/auth-interceptor.service";
import { DepartmentComponent } from './components/department/department.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfessorListComponent } from './components/professor-list/professor-list.component';
import { ProfessorCardComponent } from './components/professor-card/professor-card.component';
import { CreateProfileComponent } from './components/create-profile/create-profile.component';
import { SavedCardComponent } from './components/saved-card/saved-card.component';
import { ApplicationCardComponent } from './components/application-card/application-card.component';
import { OpportunitiesCardComponent } from './components/opportunities-card/opportunities-card.component';
import { PostingPageComponent } from './components/posting-page/posting-page.component';
import { RequestCardComponent } from './components/request-card/request-card.component';
import { MeetingCardComponent } from './components/meeting-card/meeting-card.component';
import { AppliedCardComponent } from './components/applied-card/applied-card.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DepartmentComponent,
    ProfileComponent,
    ProfessorListComponent,
    ProfessorCardComponent,
    CreateProfileComponent,
    SavedCardComponent,
    ApplicationCardComponent,
    OpportunitiesCardComponent,
    PostingPageComponent,
    RequestCardComponent,
    MeetingCardComponent,
    AppliedCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatToolbarModule,
    ReactiveFormsModule,
    HttpClientModule,
    DropDownListModule,
    ComboBoxModule, AutoCompleteModule, MultiSelectModule, ListBoxModule, DropDownTreeModule, MentionModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}