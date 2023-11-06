import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { AuthService } from "src/app/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(7),
      ]),
    });
  }

  login(): void {
    // console.log("Hit login");
    console.log(this.loginForm.value.email, this.loginForm.value.password);
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
      (response) => {
        // Check if the login was successful
        if (response.token) {
          // Redirect to the home page (change 'home' to the actual route path)
          // console.log("Yoyo");
          this.router.navigate(["/home"]);
        } else {
          // Handle unsuccessful login here
          alert("unsuccesful login")
        }
      },
      (error) => {
        // Handle errors here
      }
    );
  }
  
  
}
