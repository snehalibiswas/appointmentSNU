import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MatSelectModule } from '@angular/material/select';
import {NavigationExtras, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  public departments: any[] = [];

  constructor(private authService: AuthService, private router: Router, private http: HttpClient, private route: ActivatedRoute) {
    this.getdepartment();
  }

  ngOnInit(): void {
    this.signupForm = this.createFormGroup();
  }

  getdepartment() {
    this.http.get("http://localhost:3000/api/departments/")
      .subscribe((resultData: any) => {
        console.log(resultData);
        this.departments = resultData.data;
      })
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      name: new FormControl("", [Validators.required, Validators.minLength(2)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(7),
      ]),
      role: new FormControl("student", Validators.required), 
      department: new FormControl("", Validators.required),
    });
  }

  signup(): void {
    if (this.signupForm.valid) {
      const name = this.signupForm.get('name')?.value;
      const email = this.signupForm.get('email')?.value;
      const password = this.signupForm.get('password')?.value;
      const role = this.signupForm.get('role')?.value; // Access the value of the "role" form control
      const department = this.signupForm.get('department')?.value;
  
      // Example: Log the values to the console
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Role:', role);
      console.log('Department:', department);
      
    this.authService.signup(this.signupForm.value).subscribe((msg) => {
      console.log(msg);
      this.router.navigate(["login"]);
    });
  }}
}